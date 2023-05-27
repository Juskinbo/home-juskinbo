# home-juskinbo

Juskinbo's homepage.

demo: [Juskinbo' World](https://juskinbo.cn)

![](./display.gif)

# Development

```shell
git clone https://github.com/Juskinbo/home-juskinbo.git
cd home-juskinbo
yarn install
yarn serve
```

## Build

```shell
yarn build
```

## Config

Open the infoconfig.json file in the root directory.

**Please notice that do not add too many links to prevent style errors.**

```json
{
  "name": "Juskinbo",
  "motto": "progrès infini",
  "links": [
    {
      "index": 1,
      "title": "Home",
      "icon": "https://s2.loli.net/2023/05/26/vamwe9r4CxDb2LQ.png",
      "url": "/"
    },
    {
      "index": 2,
      "title": "Blog",
      "icon": "https://s2.loli.net/2023/05/26/Q5yxwOA1MspRbV9.png",
      "url": "https://blog.juskinbo.cn"
    },
    {
      "index": 3,
      "title": "Memos",
      "icon": "https://s2.loli.net/2023/05/26/tV5vOPBKY9jA6rG.png",
      "url": "https://memos.juskinbo.cn"
    },
    {
      "index": 4,
      "title": "Cloud",
      "icon": "https://s2.loli.net/2023/05/26/R3cJXgif7dbvFA2.png",
      "url": "https://cloud.juskinbo.cn"
    }
  ],
  "filing": [
    {
      "index": 1,
      "name": "ICP",
      "number": "浙ICP备2022003626号-1",
      "url": "https://beian.miit.gov.cn/"
    },
    {
      "index": 2,
      "name": "gongan",
      "number": "浙公网安备 33100202001341号",
      "url": "https://www.beian.gov.cn/"
    }
  ]
}
```



