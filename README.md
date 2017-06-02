
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

Browse `[compiled/](https://github.com/minimal-xyz/minimal-shadow-cljs/tree/master/compiled/)` to see the results.

##### Advanced

Watch and compile:

```bash
yarn watch # shadow-cljs --dev
```

Compiled with dead code eliminations:

```basn
yarn release # shadow-cljs --release
```

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

##### For `release` mode

Notice that in release, in order to build in `:advanced`, `shadow-cljs.edn` is required:

```edn
[{:id :release
  :target :npm-module
  :output-dir "compiled/"
  :release {:entries [example.main]}}]
```

And to run with `release` configs:

```bash
shadow-cljs -b release --release
```

### License

MIT
