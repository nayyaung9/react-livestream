# React-livestreaming App

> Before cloning this, please give a star for this repo if you are interested :)

`http://localhost:3000/streams` <br />

<img src="https://i.ibb.co/jgBB8rc/streams-List.png" alt="StreamList" width="100" height="100">
<br/>

`http://localhost:3000/stream/<random-id>` <br />

<img src="https://i.ibb.co/kMGFLVW/Screenshot-from-2020-04-12-02-27-24.png" alt="Screenshot-from-2020-04-12-02-27-24"  width="100" height="100">

[https://github.com/nayyaung9/json-database-livestream](https://github.com/nayyaung9/json-database-livestream)

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
