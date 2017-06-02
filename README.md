
Example for [shadow-cljs](https://github.com/thheller/shadow-cljs)
----

### Usage

Compile ClojureScript into CommonJS JavaScript:

```bash
yarn
yarn compile # shadow-cljs --once
```

Then you can check CommonJS result with Node.js :

```bash
$ node
> require('./compiled/example.main').main()
App loaded!
null
>
```

Watch and compiled

```bash
yarn watch # shadow-cljs --dev
```

Browse `[compiled/](https://github.com/minimal-xyz/minimal-shadow-cljs/tree/master/compiled/)` to see the results.

### Steps

Here's a guide:

* `yarn add --dev shadow-cljs`
* add `shadow-cljs` configs in `package.json`

```js
  "shadow-cljs": {
    "source-paths": [
      "src/"
    ],
    "output-dir": "compiled/"
  },
```

* compile with commands

### License

MIT
