
Example for [shadow-cljs](https://github.com/thheller/shadow-cljs)
----

### Usage

Compile ClojureScript into CommonJS JavaScript:

```bash
yarn
yarn compile # shadow-cljs -b release --once
```

Then you can check CommonJS result with Node.js :

```bash
$ node
> require('./compiled/example.main').main()
App loaded!
null
>
```

Browse [`compiled/`](https://github.com/minimal-xyz/minimal-shadow-cljs/tree/master/compiled/) to see the results.

##### Advanced

Watch and compile:

```bash
yarn watch # shadow-cljs -b release --dev
```

Compiled with dead code eliminations:

```basn
yarn release # shadow-cljs -b release --release
```

### Steps

To setup in a new project:

* `yarn add --dev shadow-cljs`
* add `shadow-cljs` configs in `package.json`
* compile with commands

##### For `release` mode

Notice that in release, in order to build in `:advanced`, this is required:

```edn
  {; ...
   :release {:entries [example.main]}}
```

### License

MIT
