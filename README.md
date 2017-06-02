
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

### License

MIT
