## Create Json server for streams

```
yarn add json-server
```

create db.json.

```
{
  "streams": []
}
```

inside package.json

add `"scripts"` field

"start": "json-server -p 3001 -w db.json"
