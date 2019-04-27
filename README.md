# edmond-front

社内の書籍管理システム Edmond のフロントエンド用リポジトリです。
バックエンド: <https://github.com/k-kom/edmond-ql>
スキャナ: <https://github.com/megane42/edmond-scanner>

## 前提その１：バックエンドの edmond-ql を動かしておく

こちらのリポジトリを自分のローカルに`clone`するなり`docker pull`するなりして`localhost:8888`で動いている状態にしてください。

<https://github.com/k-kom/edmond-ql>

## 前提その２：node のバージョン管理

node のバージョン管理には nvm を使うことを強くおすすめします。多分 node の lts だと何でも動くんじゃいでしょうか。v10 と v12 では動くことを確認しています。

<https://github.com/nvm-sh/nvm>

## 前提その３：API エンドポイントの設定

デフォルトで graphql の API エンドポイントは社内のローカル IP を向くようにしているので、`nuxt.config.js`の`apollo.clientConfigs.default.httpEndpoint`に直接`localhost:8888/graphql`を書き込むか、`export EDMOND_API_ENDPOINT=http://localhost:8888/graphql`を事前に実行してください。

## 動かす

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# ここから下は基本的に使わないはず
# # build for production and launch server
# $ npm run build
# $ npm start

# # generate static project
# $ npm run generate
```

## 動かない！そんな時は

### npm run dev でエラーになって動かない

- `npm install` は実行ましたか？
- `node-sass`のビルドがよくコケます。`npm rebuild node-sass`すると幸せになれるかも。

### 検索バーに文字列を入れても何も変わらない

多分 API とのやり取りでコケているので、デベロッパーツールの`Network`タブで graphql に対して正しいリクエストが飛んでいるか確認してください。
