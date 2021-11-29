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

#include <couchbase/document_id.hxx>

#include <spdlog/fmt/bundled/core.h>

template<>
struct fmt::formatter<couchbase::document_id> : formatter<string_view> {
    template<typename FormatContext>
    auto format(const couchbase::document_id& id, FormatContext& ctx)
    {
        return formatter<string_view>::format(fmt::format("{}/{}/{}", id.bucket(), id.collection_path(), id.key()), ctx);
    }
};
