this["JST"] = this["JST"] || {};

this["JST"]["assets/linker/templates/city-box"] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (W, __, bases, console, helpers, obj, request) {
// This file should be used only on the client, since on server you should just call the mixin
// Whith this we make sure that the city box is exported to the client
// We also include the mixins to make them available from client
jade_mixins["city-box"] = function(obj, bases, request){
var block = (this && this.block), attributes = (this && this.attributes) || {};
//*** This template is used both on server and client side
//*** It's a block for city info with cached information
// Sets the base for weather info into the object
// If unit is F and there is converted we use that as base 
var baseWeather = W.unit != 'c' && obj.converted ? obj.converted : obj;
buf.push("<div class=\"info-window\"><img" + (jade.attr("src", W.staticBaseUrl + '/flags/48/' + obj.flag, true, false)) + " class=\"flag\"/>");
jade_mixins["place-link"](obj, bases, request);
buf.push("<div class=\"geo-info\">");
if ( (obj.grandparent_id == 20208 && obj.parent))
{
buf.push("<span class=\"division\">" + (jade.escape(null == (jade_interp = obj.parent) ? "" : jade_interp)) + "</span>, <span class=\"country\">USA</span>");
}
else
{
buf.push("<span class=\"country\">" + (jade.escape(null == (jade_interp = obj.grandparent) ? "" : jade_interp)) + "</span>");
}
buf.push("</div>");
if ( baseWeather.temp_avg)
{
buf.push("<p class=\"weather-info temp\"><span class=\"field\">" + (jade.escape(null == (jade_interp = __("AverageTemperature") + ': ') ? "" : jade_interp)) + "</span>");
if ( obj.temp_min_avg)
{
buf.push("<span class=\"value\">" + (null == (jade_interp = __('TempMinMax', baseWeather.temp_min_avg, __('Unit_Symbol_' + W.unit), baseWeather.temp_avg, __('Unit_Symbol_' + W.unit))) ? "" : jade_interp) + "</span>");
}
else
{
buf.push("<span class=\"value\">" + (jade.escape(null == (jade_interp = baseWeather.temp_avg + ' ' + __('Unit_Symbol_' + W.unit)) ? "" : jade_interp)) + "</span>");
}
buf.push("</p>");
}
if ( baseWeather.precipitation_avg)
{
buf.push("<p class=\"weather-info rain\"><span class=\"field\">" + (jade.escape(null == (jade_interp = __("AveragePrecipitation") + ': ') ? "" : jade_interp)) + "</span>");
var precipitation_unit = W.unit == 'f' ? 'inch' : 'mm'
buf.push("<span class=\"value\">" + (jade.escape(null == (jade_interp = baseWeather.precipitation_avg + ' ' + __('Unit_Symbol_' + precipitation_unit)) ? "" : jade_interp)) + "</span></p>");
}
buf.push("</div>");
};
jade_mixins["place-link"] = function(obj, bases, request){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var monthId = obj.month || request.month || null
var monthSuffix = monthId !== null ? '-' + monthId : ''
var type = obj.type || 'city'
var show = obj.show || request.show || 'weather'
if ( type == "city" && obj.country_id == 20208)
{
console.log('sisisisisisis')
var parentName = obj.parent || bases.name || bases.parent
}
else
{
var parentName = obj.grandparent || bases.parent || bases.name || ""
}
if ( parentName)
{
parentName = ', ' + parentName
}
var name = obj.name 
var description = __("seo_link_" + show, name + parentName, (monthId ? __("Month_Long_" + monthId) : ''))
buf.push("<a" + (jade.attr("href", "/" + type + "/" + show + '/' + obj.name_id + monthSuffix + '/' + helpers.slugify(description), true, false)) + (jade.attr("title", description, true, false)) + " class=\"title\">" + (jade.escape(null == (jade_interp = name) ? "" : jade_interp)) + "</a>");
};
jade_mixins["city-box"].call({
block: function(){
buf.push(" ");
}
}, obj, bases, request);}.call(this,"W" in locals_for_with?locals_for_with.W:typeof W!=="undefined"?W:undefined,"__" in locals_for_with?locals_for_with.__:typeof __!=="undefined"?__:undefined,"bases" in locals_for_with?locals_for_with.bases:typeof bases!=="undefined"?bases:undefined,"console" in locals_for_with?locals_for_with.console:typeof console!=="undefined"?console:undefined,"helpers" in locals_for_with?locals_for_with.helpers:typeof helpers!=="undefined"?helpers:undefined,"obj" in locals_for_with?locals_for_with.obj:typeof obj!=="undefined"?obj:undefined,"request" in locals_for_with?locals_for_with.request:typeof request!=="undefined"?request:undefined));;return buf.join("");
};