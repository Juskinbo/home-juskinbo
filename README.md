# home-juskinbo

Juskinbo's homepage.

demo: [Juskinbo' World](https://juskinbo.cn)

![](./display.gif)

# Install

```shell
git clone https://github.com/Juskinbo/home-juskinbo.git
cd home-juskinbo
yarn install
```

## Config

Open the infoconfig.json file in the root directory.

**Please notice that do not add too many links to prevent style errors.**

```json
{
  "name": "your name",
  "motto": "your motto",
  "links": [
    {
      "index": 1,
      "title": "site title",
      "icon": "icon url",
      "url": "site url"
    },
    {
      "index": 2,
      "title": "site title",
      "icon": "icon url",
      "url": "site url"
    },
    {
      "index": 3,
      "title": "site title",
      "icon": "icon url",
      "url": "site url"
    }
  ],
  "filing": [
    {
      "index": 1,
      "name": "ICP",
      "number": "your site ICP number",
      "url": "https://beian.miit.gov.cn/"
    },
    {
      "index": 2,
      "name": "gongan",
      "number": "your site gongan number",
      "url": "https://www.beian.gov.cn/"
    }
  ],
  "friends": [
    {
      "index": 1,
      "name": "friend name",
      "avatar": "friend avatar url",
      "url": "friend site url"
    }
  ]
}
```

## Run

```shell
yarn start
```

## Build

```shell
yarn build
```