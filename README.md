# React-livestreaming App

> Before cloning this, please give a star for this repo if you are interested :)

http://localhost:3000/streams <br />

![Demo]('./public/images/demo0.png')

## Clone Json-server

[https://github.com/nayyaung9/rtmp-server-livestream](https://github.com/nayyaung9/rtmp-server-livestream)

### Install

`yarn install (or) npm install`

### create db.json file

```
{
  "streams": []
}
```

### Configuration

**inside package.json, add `"start"` in `"scripts"` field**

`"start": "json-server -p 3001 -w db.json"`

## Clone RTMP-Server

[https://github.com/nayyaung9/rtmp-server-livestream](https://github.com/nayyaung9/rtmp-server-livestream)

### Install

`yarn install (or) npm install`

### Configuration

**inside package.json, add `"start"` in `"scripts"` field**

```
"scripts": {
  "start": "node index.js"
},
```

### Run

```
node index.js
```

### Host

```
rtmp://localhost/live
```
