
Example for [shadow-cljs](https://github.com/thheller/shadow-cljs)
----

### Usage

Compile ClojureScript into CommonJS JavaScript:

```bash
yarn
yarn compile
```

Browse `target/` folder to see the results. You can check CommonJS result with `node`:

```bash
$ node
> require('./target/example.main').main()
App loaded!
null
>
```

##### Advanced

Watch and compile:

```bash
$ yarn shadow-cljs watch app
$ node
> require('./target/example.main').main()
App loaded!
null
>
```

Compiled with dead code eliminations:

```basn
$ yarn shadow-cljs release app
$ node
> require('./target/release/example.main').main()
App loaded!
null
>
```

### Steps

To setup in a new project:

* `yarn add --dev shadow-cljs`
* configure `shadow-cljs.edn`
* compile with commands

##### For `release` mode

Notice that in release, in order to build in `:advanced`, `:entries` is required:

```edn
  {; ...
   :release {:entries [example.main]
             :output-dir "target/release/"}}
```

And configs of `:release` will overwrite previous configs.

### License

MIT
