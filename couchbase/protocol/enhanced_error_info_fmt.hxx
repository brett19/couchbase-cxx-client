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

#pragma once

#include <couchbase/protocol/enhanced_error_info.hxx>
#include <spdlog/fmt/bundled/core.h>

template<>
struct fmt::formatter<couchbase::protocol::enhanced_error_info> : formatter<string_view> {
    template<typename FormatContext>
    auto format(const couchbase::protocol::enhanced_error_info& error, FormatContext& ctx)
    {
        if (!error.reference.empty() && !error.context.empty()) {
            return formatter<string_view>::format(fmt::format(R"((ref: "{}", ctx: "{}"))", error.reference, error.context), ctx);
        } else if (!error.reference.empty()) {
            return formatter<string_view>::format(fmt::format(R"((ref: "{}"))", error.reference), ctx);
        } else if (!error.context.empty()) {
            return formatter<string_view>::format(fmt::format(R"((ctx: "{}"))", error.context), ctx);
        }
        return formatter<string_view>::format("", ctx);
    }
};
