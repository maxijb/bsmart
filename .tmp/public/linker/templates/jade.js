this["JST"] = this["JST"] || {};

this["JST"]["assets/linker/templates/jade"] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (__, chico, dato) {
buf.push("<div id=\"fre\"><div class=\"maxi\">" + (jade.escape(null == (jade_interp = __("Welcome", dato)) ? "" : jade_interp)) + "</div><div id=\"searchbox\"><h1 class=\"maxi\">" + (jade.escape(null == (jade_interp = chico) ? "" : jade_interp)) + "</h1></div></div>");}.call(this,"__" in locals_for_with?locals_for_with.__:typeof __!=="undefined"?__:undefined,"chico" in locals_for_with?locals_for_with.chico:typeof chico!=="undefined"?chico:undefined,"dato" in locals_for_with?locals_for_with.dato:typeof dato!=="undefined"?dato:undefined));;return buf.join("");
};