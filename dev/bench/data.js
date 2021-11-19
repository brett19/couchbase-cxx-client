window.BENCHMARK_DATA = {
  "lastUpdate": 1637347757764,
  "repoUrl": "https://github.com/couchbaselabs/couchbase-cxx-client",
  "entries": {
    "Mad Hatter": [
      {
        "commit": {
          "author": {
            "name": "couchbaselabs",
            "username": "couchbaselabs"
          },
          "committer": {
            "name": "couchbaselabs",
            "username": "couchbaselabs"
          },
          "id": "d87b5ed2dba230ea74c8120143a2fb781e834314",
          "message": "add benchmarking infrastructure",
          "timestamp": "2021-11-03T20:04:35Z",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/pull/32/commits/d87b5ed2dba230ea74c8120143a2fb781e834314"
        },
        "date": 1635978505812,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 344.781,
            "range": "± 52.0124",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7d3097adf06225768fbe57e1a5a87752553bbe95",
          "message": "add benchmarking infrastructure (#32)",
          "timestamp": "2021-11-08T17:08:04Z",
          "tree_id": "78072287b54e8c1737b759031d0d60ed9fe585ed",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/7d3097adf06225768fbe57e1a5a87752553bbe95"
        },
        "date": 1636392823558,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 361.311,
            "range": "± 91.9026",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "51ad42064fa5153bdd2cf7428e5fb74df7ae995e",
          "message": "CXXCBC-25: keep scope and collection separate in document_id (#36)",
          "timestamp": "2021-11-08T18:26:02Z",
          "tree_id": "c46363b243420e50dad44b3d20596b6d14762d65",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/51ad42064fa5153bdd2cf7428e5fb74df7ae995e"
        },
        "date": 1636397177744,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 547.207,
            "range": "± 760.97",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "04a826d7711b7353eec1254c0f92d5479138f803",
          "message": "represent CAS as type instead of std::uint64_t (#35)",
          "timestamp": "2021-11-08T18:53:33Z",
          "tree_id": "ceccd1f4a16b423ecee69aedfd1761c47934f0cd",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/04a826d7711b7353eec1254c0f92d5479138f803"
        },
        "date": 1636398591770,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 351.28,
            "range": "± 87.1474",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0aae6af8c075961141fa10deaa8653f5f111ba75",
          "message": "restructuring test helpers (#40)\n\n* Add integration test helper class\r\n\r\nAdd a helper class that correctly cleans up asio on tear down. When using sections this prevents a single test failure skipping tests defined in later sections\r\n\r\n* restructure test helpers\r\n\r\nCo-authored-by: Jake Rawsthorne <jake.rawsthorne@couchbase.com>",
          "timestamp": "2021-11-10T17:58:43Z",
          "tree_id": "3870453934af81995959f7546b82ba414f5f5671",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/0aae6af8c075961141fa10deaa8653f5f111ba75"
        },
        "date": 1636568338643,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 601.628,
            "range": "± 839.542",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "935b86f676856c3026f4ce6fffe5b77bc59aa724",
          "message": "default constructor for document_id (#38)",
          "timestamp": "2021-11-10T18:58:42Z",
          "tree_id": "e3af097580382c9f34240ec29f42ab98e7e87e88",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/935b86f676856c3026f4ce6fffe5b77bc59aa724"
        },
        "date": 1636571963122,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 669.282,
            "range": "± 991.137",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jake.rawsthorne@couchbase.com",
            "name": "Jake Rawsthorne",
            "username": "jrawsthorne"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ca933ba3375e8cf9cbf0a0ae72f6059fe88a259a",
          "message": "SDKQE-2482: Port arithmetic integration tests from lcb (#42)",
          "timestamp": "2021-11-12T15:40:11Z",
          "tree_id": "96455c35f20949987b1ae82e53cdbcbd3cc4fb60",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/ca933ba3375e8cf9cbf0a0ae72f6059fe88a259a"
        },
        "date": 1636732625186,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 335.497,
            "range": "± 43.621",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jake.rawsthorne@couchbase.com",
            "name": "Jake Rawsthorne",
            "username": "jrawsthorne"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "519f6dd1661156011f6d6204e1e024c884b67822",
          "message": "Fix flaky bucket management test (#41)\n\nAdd test helpers that wait for an arbitrary condition\r\nAdd test helper that waits for a bucket to become healthy",
          "timestamp": "2021-11-12T15:41:26Z",
          "tree_id": "450ae34accca2233b3a5ccccb6d60a5349d2dba2",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/519f6dd1661156011f6d6204e1e024c884b67822"
        },
        "date": 1636732873420,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 510.521,
            "range": "± 279.924",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d067614d62dc20a9673dbe8d175b307cdd08bc9a",
          "message": "add missing header (#46)\n\ngcc 11 complains that <optional> is not included yet in\r\nconfiguration.hxx",
          "timestamp": "2021-11-15T11:04:56Z",
          "tree_id": "8af04398e8dc03818857a5d2da2bf054d2e96ce7",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/d067614d62dc20a9673dbe8d175b307cdd08bc9a"
        },
        "date": 1636975288803,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 471.922,
            "range": "± 784.355",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f75eb7e041f0df46e99dce8cb98a8c37076de586",
          "message": "fix build on MacOS (#47)",
          "timestamp": "2021-11-15T11:04:38Z",
          "tree_id": "0811455f5043f061ab6dc979da3b0a9b0f4580cd",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/f75eb7e041f0df46e99dce8cb98a8c37076de586"
        },
        "date": 1636975305638,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 403.091,
            "range": "± 528.759",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jake.rawsthorne@couchbase.com",
            "name": "Jake Rawsthorne",
            "username": "jrawsthorne"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e3c0d9beb7b45ae550e3b355ee8a1a8a174d7758",
          "message": "SDKQE-2484: Port CRUD tests from libcouchbase (#44)\n\n* display test output on failure\r\n* implement shortcut check for exists_response\r\n* port mutation integration tests from lcb\r\n\r\nCo-authored-by: Sergey Avseyev <sergey.avseyev@gmail.com>",
          "timestamp": "2021-11-15T13:26:40Z",
          "tree_id": "3cd2d2e8ec0c04f612f4dbf4d2d142b933fffffe",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/e3c0d9beb7b45ae550e3b355ee8a1a8a174d7758"
        },
        "date": 1636983823168,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 360.698,
            "range": "± 121.553",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jake.rawsthorne@couchbase.com",
            "name": "Jake Rawsthorne",
            "username": "jrawsthorne"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "07d3b4815f76d956cb08cf5420f37fa6274679f5",
          "message": "Skip durability tests on older server versions (#48)",
          "timestamp": "2021-11-15T13:51:22Z",
          "tree_id": "9771506456a0ec2a98907b1bc56aed476b1ba705",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/07d3b4815f76d956cb08cf5420f37fa6274679f5"
        },
        "date": 1636985496240,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 570.87,
            "range": "± 719.276",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0b9a9bbca9f98c37ba70122f1fd3d33c1f9351f6",
          "message": "CXXCBC-28: switch exists operation to get_meta (#49)",
          "timestamp": "2021-11-15T18:06:19Z",
          "tree_id": "20787e4a341e4f826c6b5492ce511a36731d44cf",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/0b9a9bbca9f98c37ba70122f1fd3d33c1f9351f6"
        },
        "date": 1637000619528,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 349.862,
            "range": "± 127.475",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a43d22ff519f4f62ad2c3f85d9122db96acaefa8",
          "message": "fix move semantics for handlers (#45)\n\nin particular, allow to use lambdas that capture move-only objects as\r\noperation handlers",
          "timestamp": "2021-11-17T17:56:24Z",
          "tree_id": "019754ba279318fdf592e79d54218a799aa92255",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/a43d22ff519f4f62ad2c3f85d9122db96acaefa8"
        },
        "date": 1637173081094,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 516.285,
            "range": "± 272.43",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jake.rawsthorne@couchbase.com",
            "name": "Jake Rawsthorne",
            "username": "jrawsthorne"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1128790d371b9aefd047ca08de603a64daf16ead",
          "message": "SDKQE-2483: Port collections tests from lcb (#43)\n\n* SDKQE-2483: Port collections tests from lcb\r\n* update retry reasons of the original request when collection is missing\r\n\r\nCo-authored-by: Sergey Avseyev <sergey.avseyev@gmail.com>",
          "timestamp": "2021-11-18T18:42:50Z",
          "tree_id": "e03b2ac62c67763215a3e6576a52262988b3bfc0",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/1128790d371b9aefd047ca08de603a64daf16ead"
        },
        "date": 1637262167976,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 491.943,
            "range": "± 599.25",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      }
    ],
    "Neo": [
      {
        "commit": {
          "author": {
            "name": "couchbaselabs",
            "username": "couchbaselabs"
          },
          "committer": {
            "name": "couchbaselabs",
            "username": "couchbaselabs"
          },
          "id": "d87b5ed2dba230ea74c8120143a2fb781e834314",
          "message": "add benchmarking infrastructure",
          "timestamp": "2021-11-03T20:04:35Z",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/pull/32/commits/d87b5ed2dba230ea74c8120143a2fb781e834314"
        },
        "date": 1635978622926,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 392.577,
            "range": "± 66.5826",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7d3097adf06225768fbe57e1a5a87752553bbe95",
          "message": "add benchmarking infrastructure (#32)",
          "timestamp": "2021-11-08T17:08:04Z",
          "tree_id": "78072287b54e8c1737b759031d0d60ed9fe585ed",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/7d3097adf06225768fbe57e1a5a87752553bbe95"
        },
        "date": 1636392712232,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 377.781,
            "range": "± 48.0308",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "51ad42064fa5153bdd2cf7428e5fb74df7ae995e",
          "message": "CXXCBC-25: keep scope and collection separate in document_id (#36)",
          "timestamp": "2021-11-08T18:26:02Z",
          "tree_id": "c46363b243420e50dad44b3d20596b6d14762d65",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/51ad42064fa5153bdd2cf7428e5fb74df7ae995e"
        },
        "date": 1636397165955,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 579.897,
            "range": "± 644.496",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "04a826d7711b7353eec1254c0f92d5479138f803",
          "message": "represent CAS as type instead of std::uint64_t (#35)",
          "timestamp": "2021-11-08T18:53:33Z",
          "tree_id": "ceccd1f4a16b423ecee69aedfd1761c47934f0cd",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/04a826d7711b7353eec1254c0f92d5479138f803"
        },
        "date": 1636398565047,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 407.177,
            "range": "± 727.165",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0aae6af8c075961141fa10deaa8653f5f111ba75",
          "message": "restructuring test helpers (#40)\n\n* Add integration test helper class\r\n\r\nAdd a helper class that correctly cleans up asio on tear down. When using sections this prevents a single test failure skipping tests defined in later sections\r\n\r\n* restructure test helpers\r\n\r\nCo-authored-by: Jake Rawsthorne <jake.rawsthorne@couchbase.com>",
          "timestamp": "2021-11-10T17:58:43Z",
          "tree_id": "3870453934af81995959f7546b82ba414f5f5671",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/0aae6af8c075961141fa10deaa8653f5f111ba75"
        },
        "date": 1636568074300,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 361.859,
            "range": "± 128.897",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "935b86f676856c3026f4ce6fffe5b77bc59aa724",
          "message": "default constructor for document_id (#38)",
          "timestamp": "2021-11-10T18:58:42Z",
          "tree_id": "e3af097580382c9f34240ec29f42ab98e7e87e88",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/935b86f676856c3026f4ce6fffe5b77bc59aa724"
        },
        "date": 1636571832751,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 427.672,
            "range": "± 51.9352",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jake.rawsthorne@couchbase.com",
            "name": "Jake Rawsthorne",
            "username": "jrawsthorne"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "519f6dd1661156011f6d6204e1e024c884b67822",
          "message": "Fix flaky bucket management test (#41)\n\nAdd test helpers that wait for an arbitrary condition\r\nAdd test helper that waits for a bucket to become healthy",
          "timestamp": "2021-11-12T15:41:26Z",
          "tree_id": "450ae34accca2233b3a5ccccb6d60a5349d2dba2",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/519f6dd1661156011f6d6204e1e024c884b67822"
        },
        "date": 1636732817733,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 476.827,
            "range": "± 96.0022",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jake.rawsthorne@couchbase.com",
            "name": "Jake Rawsthorne",
            "username": "jrawsthorne"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ca933ba3375e8cf9cbf0a0ae72f6059fe88a259a",
          "message": "SDKQE-2482: Port arithmetic integration tests from lcb (#42)",
          "timestamp": "2021-11-12T15:40:11Z",
          "tree_id": "96455c35f20949987b1ae82e53cdbcbd3cc4fb60",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/ca933ba3375e8cf9cbf0a0ae72f6059fe88a259a"
        },
        "date": 1636732875074,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 522.283,
            "range": "± 158.91",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f75eb7e041f0df46e99dce8cb98a8c37076de586",
          "message": "fix build on MacOS (#47)",
          "timestamp": "2021-11-15T11:04:38Z",
          "tree_id": "0811455f5043f061ab6dc979da3b0a9b0f4580cd",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/f75eb7e041f0df46e99dce8cb98a8c37076de586"
        },
        "date": 1636975278991,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 439.271,
            "range": "± 574.369",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d067614d62dc20a9673dbe8d175b307cdd08bc9a",
          "message": "add missing header (#46)\n\ngcc 11 complains that <optional> is not included yet in\r\nconfiguration.hxx",
          "timestamp": "2021-11-15T11:04:56Z",
          "tree_id": "8af04398e8dc03818857a5d2da2bf054d2e96ce7",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/d067614d62dc20a9673dbe8d175b307cdd08bc9a"
        },
        "date": 1636975356240,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 354.131,
            "range": "± 75.4292",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jake.rawsthorne@couchbase.com",
            "name": "Jake Rawsthorne",
            "username": "jrawsthorne"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e3c0d9beb7b45ae550e3b355ee8a1a8a174d7758",
          "message": "SDKQE-2484: Port CRUD tests from libcouchbase (#44)\n\n* display test output on failure\r\n* implement shortcut check for exists_response\r\n* port mutation integration tests from lcb\r\n\r\nCo-authored-by: Sergey Avseyev <sergey.avseyev@gmail.com>",
          "timestamp": "2021-11-15T13:26:40Z",
          "tree_id": "3cd2d2e8ec0c04f612f4dbf4d2d142b933fffffe",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/e3c0d9beb7b45ae550e3b355ee8a1a8a174d7758"
        },
        "date": 1636983952074,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 496.393,
            "range": "± 630.163",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jake.rawsthorne@couchbase.com",
            "name": "Jake Rawsthorne",
            "username": "jrawsthorne"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "07d3b4815f76d956cb08cf5420f37fa6274679f5",
          "message": "Skip durability tests on older server versions (#48)",
          "timestamp": "2021-11-15T13:51:22Z",
          "tree_id": "9771506456a0ec2a98907b1bc56aed476b1ba705",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/07d3b4815f76d956cb08cf5420f37fa6274679f5"
        },
        "date": 1636985543748,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 556.622,
            "range": "± 209.181",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0b9a9bbca9f98c37ba70122f1fd3d33c1f9351f6",
          "message": "CXXCBC-28: switch exists operation to get_meta (#49)",
          "timestamp": "2021-11-15T18:06:19Z",
          "tree_id": "20787e4a341e4f826c6b5492ce511a36731d44cf",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/0b9a9bbca9f98c37ba70122f1fd3d33c1f9351f6"
        },
        "date": 1637000612311,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 352.396,
            "range": "± 59.8123",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a43d22ff519f4f62ad2c3f85d9122db96acaefa8",
          "message": "fix move semantics for handlers (#45)\n\nin particular, allow to use lambdas that capture move-only objects as\r\noperation handlers",
          "timestamp": "2021-11-17T17:56:24Z",
          "tree_id": "019754ba279318fdf592e79d54218a799aa92255",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/a43d22ff519f4f62ad2c3f85d9122db96acaefa8"
        },
        "date": 1637172913324,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 507.206,
            "range": "± 691.485",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jake.rawsthorne@couchbase.com",
            "name": "Jake Rawsthorne",
            "username": "jrawsthorne"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1128790d371b9aefd047ca08de603a64daf16ead",
          "message": "SDKQE-2483: Port collections tests from lcb (#43)\n\n* SDKQE-2483: Port collections tests from lcb\r\n* update retry reasons of the original request when collection is missing\r\n\r\nCo-authored-by: Sergey Avseyev <sergey.avseyev@gmail.com>",
          "timestamp": "2021-11-18T18:42:50Z",
          "tree_id": "e03b2ac62c67763215a3e6576a52262988b3bfc0",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/1128790d371b9aefd047ca08de603a64daf16ead"
        },
        "date": 1637262310111,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 491.6,
            "range": "± 242.994",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3eb2d3d2d3d9f171c74ae7117362a995f39ce33d",
          "message": "explicitly assign values to errors (#54)\n\n1. RFC has these codes specified, so it would be better if we use them,\r\n   because our errors are basically numeric values.\r\n\r\n2. Output operator for std::error_code uses bare integer value instead\r\n   of message, and it will be easier to search for codes in the sources.",
          "timestamp": "2021-11-19T18:28:59Z",
          "tree_id": "ccca2e8691a57c25f2e54ab7c7d52c6414160ecb",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/3eb2d3d2d3d9f171c74ae7117362a995f39ce33d"
        },
        "date": 1637347756616,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 441.306,
            "range": "± 74.4981",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      }
    ]
  }
}