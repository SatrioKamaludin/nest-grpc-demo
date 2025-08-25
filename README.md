
```
nest-grpc-demo
├─ goodbye-server
│  ├─ .eslintrc.js
│  ├─ .prettierrc
│  ├─ dist
│  │  ├─ app.controller.d.ts
│  │  ├─ app.controller.js
│  │  ├─ app.controller.js.map
│  │  ├─ app.module.d.ts
│  │  ├─ app.module.js
│  │  ├─ app.module.js.map
│  │  ├─ app.service.d.ts
│  │  ├─ app.service.js
│  │  ├─ app.service.js.map
│  │  ├─ goodbye
│  │  │  ├─ goodbye.controller.d.ts
│  │  │  ├─ goodbye.controller.js
│  │  │  ├─ goodbye.controller.js.map
│  │  │  ├─ goodbye.interface.d.ts
│  │  │  ├─ goodbye.interface.js
│  │  │  ├─ goodbye.interface.js.map
│  │  │  ├─ goodbye.module.d.ts
│  │  │  ├─ goodbye.module.js
│  │  │  ├─ goodbye.module.js.map
│  │  │  ├─ goodbye.proto
│  │  │  └─ queries
│  │  │     ├─ handlers
│  │  │     │  ├─ goodbye-handler.d.ts
│  │  │     │  ├─ goodbye-handler.js
│  │  │     │  └─ goodbye-handler.js.map
│  │  │     └─ impl
│  │  │        ├─ goodbye-query.d.ts
│  │  │        ├─ goodbye-query.js
│  │  │        └─ goodbye-query.js.map
│  │  ├─ main.d.ts
│  │  ├─ main.js
│  │  ├─ main.js.map
│  │  └─ tsconfig.build.tsbuildinfo
│  ├─ nest-cli.json
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ README.md
│  ├─ src
│  │  ├─ app.controller.spec.ts
│  │  ├─ app.controller.ts
│  │  ├─ app.module.ts
│  │  ├─ app.service.ts
│  │  ├─ goodbye
│  │  │  ├─ goodbye.controller.ts
│  │  │  ├─ goodbye.interface.ts
│  │  │  ├─ goodbye.module.ts
│  │  │  ├─ goodbye.proto
│  │  │  └─ queries
│  │  │     ├─ handlers
│  │  │     │  └─ goodbye-handler.ts
│  │  │     └─ impl
│  │  │        └─ goodbye-query.ts
│  │  └─ main.ts
│  ├─ test
│  │  ├─ app.e2e-spec.ts
│  │  └─ jest-e2e.json
│  ├─ tsconfig.build.json
│  └─ tsconfig.json
├─ hello-client
│  ├─ .eslintrc.js
│  ├─ .prettierrc
│  ├─ dist
│  │  ├─ app.controller.d.ts
│  │  ├─ app.controller.js
│  │  ├─ app.controller.js.map
│  │  ├─ app.module.d.ts
│  │  ├─ app.module.js
│  │  ├─ app.module.js.map
│  │  ├─ app.service.d.ts
│  │  ├─ app.service.js
│  │  ├─ app.service.js.map
│  │  ├─ goodbye
│  │  │  ├─ goodbye.client.service.d.ts
│  │  │  ├─ goodbye.client.service.js
│  │  │  ├─ goodbye.client.service.js.map
│  │  │  ├─ goodbye.controller.d.ts
│  │  │  ├─ goodbye.controller.js
│  │  │  ├─ goodbye.controller.js.map
│  │  │  ├─ goodbye.interface.d.ts
│  │  │  ├─ goodbye.interface.js
│  │  │  └─ goodbye.interface.js.map
│  │  ├─ hello
│  │  │  ├─ hello.client.service.d.ts
│  │  │  ├─ hello.client.service.js
│  │  │  ├─ hello.client.service.js.map
│  │  │  ├─ hello.controller.d.ts
│  │  │  ├─ hello.controller.js
│  │  │  ├─ hello.controller.js.map
│  │  │  ├─ hello.interface.d.ts
│  │  │  ├─ hello.interface.js
│  │  │  └─ hello.interface.js.map
│  │  ├─ main.d.ts
│  │  ├─ main.js
│  │  ├─ main.js.map
│  │  └─ tsconfig.build.tsbuildinfo
│  ├─ nest-cli.json
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ README.md
│  ├─ src
│  │  ├─ app.controller.spec.ts
│  │  ├─ app.controller.ts
│  │  ├─ app.module.ts
│  │  ├─ app.service.ts
│  │  ├─ goodbye
│  │  │  ├─ goodbye.client.service.ts
│  │  │  ├─ goodbye.controller.ts
│  │  │  ├─ goodbye.interface.ts
│  │  │  └─ goodbye.proto
│  │  ├─ hello
│  │  │  ├─ hello.client.service.ts
│  │  │  ├─ hello.controller.ts
│  │  │  ├─ hello.interface.ts
│  │  │  └─ hello.proto
│  │  └─ main.ts
│  ├─ test
│  │  ├─ app.e2e-spec.ts
│  │  └─ jest-e2e.json
│  ├─ tsconfig.build.json
│  └─ tsconfig.json
├─ hello-server
│  ├─ .eslintrc.js
│  ├─ .prettierrc
│  ├─ dist
│  │  ├─ app.controller.d.ts
│  │  ├─ app.controller.js
│  │  ├─ app.controller.js.map
│  │  ├─ app.module.d.ts
│  │  ├─ app.module.js
│  │  ├─ app.module.js.map
│  │  ├─ app.service.d.ts
│  │  ├─ app.service.js
│  │  ├─ app.service.js.map
│  │  ├─ hello
│  │  │  ├─ hello.controller.d.ts
│  │  │  ├─ hello.controller.js
│  │  │  ├─ hello.controller.js.map
│  │  │  ├─ hello.interface.d.ts
│  │  │  ├─ hello.interface.js
│  │  │  ├─ hello.interface.js.map
│  │  │  ├─ hello.module.d.ts
│  │  │  ├─ hello.module.js
│  │  │  ├─ hello.module.js.map
│  │  │  ├─ hello.proto
│  │  │  └─ queries
│  │  │     ├─ handlers
│  │  │     │  ├─ say-hello.handler.d.ts
│  │  │     │  ├─ say-hello.handler.js
│  │  │     │  └─ say-hello.handler.js.map
│  │  │     └─ impl
│  │  │        ├─ say-hello.query.d.ts
│  │  │        ├─ say-hello.query.js
│  │  │        └─ say-hello.query.js.map
│  │  ├─ main.d.ts
│  │  ├─ main.js
│  │  ├─ main.js.map
│  │  └─ tsconfig.build.tsbuildinfo
│  ├─ nest-cli.json
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ README.md
│  ├─ src
│  │  ├─ app.controller.spec.ts
│  │  ├─ app.controller.ts
│  │  ├─ app.module.ts
│  │  ├─ app.service.ts
│  │  ├─ hello
│  │  │  ├─ commands
│  │  │  ├─ dto
│  │  │  ├─ entities
│  │  │  ├─ hello.controller.ts
│  │  │  ├─ hello.interface.ts
│  │  │  ├─ hello.module.ts
│  │  │  ├─ hello.proto
│  │  │  └─ queries
│  │  │     ├─ handlers
│  │  │     │  └─ say-hello.handler.ts
│  │  │     └─ impl
│  │  │        └─ say-hello.query.ts
│  │  └─ main.ts
│  ├─ test
│  │  ├─ app.e2e-spec.ts
│  │  └─ jest-e2e.json
│  ├─ tsconfig.build.json
│  └─ tsconfig.json
└─ README.md

```