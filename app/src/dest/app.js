/*! automationdashboard 2016-03-02 */
define(["angular","mainDirective","mainController","mainFilter","mainService"],function(a){function b(b){b.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded;charset=utf-8";var c=function(a){var b,d,e,f,g,h,i,j="";for(b in a)if(d=a[b],d instanceof Array)for(i=0;i<d.length;++i)g=d[i],e=b+"["+i+"]",h={},h[e]=g,j+=c(h)+"&";else if(d instanceof Object)for(f in d)g=d[f],e=b+"["+f+"]",h={},h[e]=g,j+=c(h)+"&";else void 0!==d&&null!==d&&(j+=encodeURIComponent(b)+"="+encodeURIComponent(d)+"&");return j.length?j.substr(0,j.length-1):j};b.defaults.transformRequest=function(b){return a.isObject(b)&&"[object File]"!==String(b)?c(b):b}}var c=common.checkBrowser(),d={};return d=common.checkParam(c)&&common.checkParam(c[0])?"IE"==c[0]?common.checkParam(c[1])?"8.0"==c[1]||8==c[1]?a.module("autodashapp",["ui.router","ui.bootstrap","ui.bootstrap.tpls","ngSanitize","ngCookies","ngAnimate","ngTouch","ui.bootstrap.tpls","ngLocale","autodashapp.directives","autodashapp.controllers","autodashapp.filters","autodashapp.services"],function(a){b(a)}):a.module("autodashapp",["ui.router","ui.bootstrap","ui.bootstrap.tpls","ngSanitize","ngCookies","ngAnimate","ngTouch","ngLocale","ngMessages","autodashapp.directives","autodashapp.controllers","autodashapp.filters","autodashapp.services"],function(a){b(a)}):a.module("autodashapp",["ui.router","ui.bootstrap","ui.bootstrap.tpls","ngSanitize","ngCookies","ngAnimate","ngTouch","angularFileUpload","ngLocale","ngMessages","autodashapp.directives","autodashapp.controllers","autodashapp.filters","autodashapp.services"],function(a){b(a)}):a.module("autodashapp",["ui.router","ui.bootstrap","ui.bootstrap.tpls","ngSanitize","ngCookies","ngLocale","ngMessages","autodashapp.directives","autodashapp.controllers","autodashapp.filters","autodashapp.services"],function(a){b(a)}):a.module("autodashapp",["ui.router","ui.bootstrap","ui.bootstrap.tpls","ngSanitize","ngCookies","ngAnimate","ngTouch","ngLocale","ngMessages","autodashapp.directives","autodashapp.controllers","autodashapp.filters","autodashapp.services"],function(a){b(a)})});
/*! automationdashboard 最后修改于： 2016-03-02 */