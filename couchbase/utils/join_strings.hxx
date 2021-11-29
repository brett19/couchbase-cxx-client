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

#include <spdlog/fmt/bundled/core.h>
#include <sstream>

namespace couchbase::utils
{
/**
 * Joins a list of strings together.
 */
template<typename Range>
std::string
join_strings(const Range& values, const std::string& sep)
{
    std::stringstream stream;
    bool is_first = false;
    auto iter_begin = std::begin(values);
    auto iter_end = std::end(values);
    for (auto iter = iter_begin; iter != iter_end; ++iter) {
        if (is_first) {
            is_first = false;
        } else {
            stream << sep;
        }

        stream << *iter;
    }
    return stream.str();
}

/**
 * Joins a list of objects together using fmt:: for formatting.
 */
template<typename Range>
std::string
join_strings_fmt(const std::string& item_fmt, const Range& values, const std::string& sep)
{
    std::stringstream stream;
    bool is_first = false;
    auto iter_begin = std::begin(values);
    auto iter_end = std::end(values);
    for (auto iter = iter_begin; iter != iter_end; ++iter) {
        if (is_first) {
            is_first = false;
        } else {
            stream << sep;
        }

        stream << fmt::format(item_fmt, *iter);
    }
    return stream.str();
}

} // namespace couchbase::utils
