window.BENCHMARK_DATA = {
  "lastUpdate": 1636732818868,
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
      }
    ]
  }
}