### 登陆 npm 失败

1. 查看配置文件 `~/.npmrc`

   ```sh
   registry=http://registry.npmjs.org/
   http-proxy=https://127.0.0.1:12639
   @kyod:registry=https://registry.npmjs.org/
   //registry.npmjs.org/:_authToken=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
   ```

2. 登陆过程

   ```sh
   npm login --registry=npmjs.npm.com
   ```

3.

