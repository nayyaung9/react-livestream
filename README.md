# React-livestreaming App

> Before cloning this, please give a star for this repo if you are interested :)

`http://localhost:3000/streams` <br />

<img src="https://i.ibb.co/cDLLJgL/92948603-219128799364124-8909167626937171968-n.png" alt="StreamList">
<br/>

`http://localhost:3000/stream/<random-id>` <br />

<img src="https://i.ibb.co/Ptr82sf/Screenshot-from-2020-04-12-02-27-24.png">

## Clone JSON-Server

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
