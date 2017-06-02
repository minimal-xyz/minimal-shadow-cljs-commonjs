var $CLJS = require("./cljs_env");
require("./cljs.core.js");
var cljs=$CLJS.cljs;
var goog=$CLJS.goog;
var example=$CLJS.example || ($CLJS.example = {});
goog.dependencies_.written["example.main.js"] = true;

goog.provide('example.main');
goog.require('cljs.core');
goog.require('cljs.core');
example.main.main = (function example$main$main(){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["App loaded!"], 0));
});

module.exports = example.main;

//# sourceMappingURL=example.main.js.map
