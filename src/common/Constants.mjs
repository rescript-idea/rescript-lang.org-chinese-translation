// Generated by ReScript, PLEASE EDIT WITH CARE


var allManualVersions = [
  [
    "latest",
    "v9.1 - v10.0"
  ],
  [
    "v9.0.0",
    "v8.2 - v9.0"
  ],
  [
    "v8.0.0",
    "v6.0 - v8.2"
  ]
];

function languageManual(version) {
  return [
          [
            "概览",
            "/docs-cn/manual/" + version + "/introduction"
          ],
          [
            "语言特性",
            "/docs-cn/manual/" + version + "/overview"
          ],
          [
            "与 JS 互操作",
            "/docs-cn/manual/" + version + "/embed-raw-javascript"
          ],
          [
            "构建系统",
            "/docs-cn/manual/" + version + "/build-overview"
          ]
        ];
}

var ecosystem = [
  [
    "Package Index",
    "/packages"
  ],
  [
    "rescript-react",
    "/docs/react/latest/introduction"
  ],
  [
    "GenType",
    "/docs/gentype/latest/introduction"
  ],
  [
    "Reanalyze",
    "https://github.com/reason-association/reanalyze"
  ]
];

var tools = [[
    "Syntax Lookup",
    "/syntax-lookup"
  ]];

export {
  allManualVersions ,
  languageManual ,
  ecosystem ,
  tools ,
}
/* No side effect */
