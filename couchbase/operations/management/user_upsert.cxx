/* -*- Mode: C++; tab-width: 4; c-basic-offset: 4; indent-tabs-mode: nil -*- */
/*
 *   Copyright 2020-2021 Couchbase, Inc.
 *
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */

#include <couchbase/operations/management/user_upsert.hxx>

#include <couchbase/errors.hxx>
#include <couchbase/management/rbac_fmt.hxx>
#include <couchbase/operations/management/error_utils.hxx>
#include <couchbase/utils/join_strings.hxx>
#include <couchbase/utils/json.hxx>
#include <couchbase/utils/url_codec.hxx>

namespace couchbase::operations::management
{
std::error_code
user_upsert_request::encode_to(encoded_request_type& encoded, http_context& /* context */) const
{
    encoded.method = "PUT";
    encoded.path = fmt::format("/settings/rbac/users/{}/{}", domain, user.username);
    std::vector<std::string> params{};
    if (user.display_name) {
        params.push_back(fmt::format("name={}", utils::string_codec::url_encode(user.display_name.value())));
    }
    if (user.password) {
        params.push_back(fmt::format("password={}", utils::string_codec::url_encode(user.password.value())));
    }
    if (!user.groups.empty()) {
        std::string encoded_groups = utils::join_strings(user.groups, ",");
        params.push_back(fmt::format("groups={}", utils::string_codec::url_encode(encoded_groups)));
    }
    std::vector<std::string> encoded_roles{};
    encoded_roles.reserve(user.roles.size());
    for (const auto& role : user.roles) {
        std::string spec = role.name;
        if (role.bucket) {
            spec += fmt::format("[{}", role.bucket.value());
            if (role.scope) {
                spec += fmt::format(":{}", role.scope.value());
                if (role.collection) {
                    spec += fmt::format(":{}", role.collection.value());
                }
            }
            spec += "]";
        }
        encoded_roles.push_back(spec);
    }
    if (!encoded_roles.empty()) {
        std::string concatenated = utils::join_strings(encoded_roles, ",");
        params.push_back(fmt::format("roles={}", utils::string_codec::url_encode(concatenated)));
    }
    encoded.body = utils::join_strings(params, "&");
    encoded.headers["content-type"] = "application/x-www-form-urlencoded";
    return {};
}

user_upsert_response
user_upsert_request::make_response(error_context::http&& ctx, const encoded_response_type& encoded) const
{
    user_upsert_response response{ std::move(ctx) };
    if (!response.ctx.ec) {
        switch (encoded.status_code) {
            case 200:
                break;
            case 400: {
                tao::json::value payload{};
                try {
                    payload = utils::json::parse(encoded.body.data());
                } catch (const tao::pegtl::parse_error&) {
                    response.ctx.ec = error::common_errc::parsing_failure;
                    return response;
                }
                response.ctx.ec = error::common_errc::invalid_argument;
                const auto* errors = payload.find("errors");
                if (errors != nullptr && errors->is_object()) {
                    for (const auto& [code, message] : errors->get_object()) {
                        response.errors.emplace_back(fmt::format("{}: {}", code, message.get_string()));
                    }
                }
            } break;
            default:
                response.ctx.ec = extract_common_error_code(encoded.status_code, encoded.body.data());
                break;
        }
    }
    return response;
}
} // namespace couchbase::operations::management
