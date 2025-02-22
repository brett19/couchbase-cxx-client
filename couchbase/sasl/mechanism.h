/* -*- Mode: C++; tab-width: 4; c-basic-offset: 4; indent-tabs-mode: nil -*- */
/*
 *     Copyright 2018 Couchbase, Inc.
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

#include <couchbase/sasl/error.h>

#include <stdexcept>
#include <string>
#include <vector>

namespace couchbase::sasl
{

enum class Mechanism { SCRAM_SHA512, SCRAM_SHA256, SCRAM_SHA1, PLAIN };

class unknown_mechanism : public std::invalid_argument
{
  public:
    using std::invalid_argument::invalid_argument;
};

/**
 * Select a mechanism from one of the listed of mechanisms. This
 * method will pick the "most secure" mechanism.
 *
 * @param available_mechanisms the list of mechanisms to choose from
 * @return the mechanism to use
 * @throws unknown_mechanism if no supported mechanism is listed in the
 *                           available mechanisms
 */
Mechanism
select_mechanism(const std::vector<std::string>& available_mechanisms);

} // namespace couchbase::sasl

std::string
to_string(couchbase::sasl::Mechanism mechanism);
