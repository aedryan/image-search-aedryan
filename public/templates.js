!function(){"use strict";var e="undefined"==typeof global?self:global;if("function"!=typeof e.require){var t={},a={},n={},r={}.hasOwnProperty,i=/^\.\.?(\/|$)/,l=function(e,t){for(var a,n=[],r=(i.test(t)?e+"/"+t:t).split("/"),l=0,s=r.length;l<s;l++)a=r[l],".."===a?n.pop():"."!==a&&""!==a&&n.push(a);return n.join("/")},s=function(e){return e.split("/").slice(0,-1).join("/")},o=function(t){return function(a){var n=l(s(t),a);return e.require(n,t)}},u=function(e,t){var n=b&&b.createHot(e),r={id:e,exports:{},hot:n};return a[e]=r,t(r.exports,o(e),r),r.exports},c=function(e){return n[e]?c(n[e]):e},p=function(e,t){return c(l(s(e),t))},f=function(e,n){null==n&&(n="/");var i=c(e);if(r.call(a,i))return a[i].exports;if(r.call(t,i))return u(i,t[i]);throw new Error("Cannot find module '"+e+"' from '"+n+"'")};f.alias=function(e,t){n[t]=e};var d=/\.[^.\/]+$/,h=/\/index(\.[^\/]+)?$/,g=function(e){if(d.test(e)){var t=e.replace(d,"");r.call(n,t)&&n[t].replace(d,"")!==t+"/index"||(n[t]=e)}if(h.test(e)){var a=e.replace(h,"");r.call(n,a)||(n[a]=e)}};f.register=f.define=function(e,n){if(e&&"object"==typeof e)for(var i in e)r.call(e,i)&&f.register(i,e[i]);else t[e]=n,delete a[e],g(e)},f.list=function(){var e=[];for(var a in t)r.call(t,a)&&e.push(a);return e};var b=e._hmr&&new e._hmr(p,f,t,a);f._cache=a,f.hmr=b&&b.wrap,f.brunch=!0,e.require=f}}(),function(){"undefined"==typeof window?this:window;require.register("views/body.pug",function(e,t,a){function n(e){var t,a="";return a=a+'<div id="search-container"><h1>'+pug.escape(null==(t="Image Search")?"":t)+'</h1><div class="header-controls"><div class="field-container"><label>'+pug.escape(null==(t="Search")?"":t)+'</label><input type="text" id="search-input"></div><div class="field-container"><label>'+pug.escape(null==(t="Offset")?"":t)+'</label><input type="number" id="offset-input"></div><div class="button-container"><button id="search-button">'+pug.escape(null==(t="Search")?"":t)+'</button></div></div><div class="table-container" id="results-container"><h2>'+pug.escape(null==(t="Image Results")?"":t)+'</h2><table id="results-table"></table></div><div class="table-container" id="recents-container"><h2>'+pug.escape(null==(t="Recent Searches")?"":t)+'</h2><table id="recents-table"></table></div></div>'}a.exports=n}),require.register("views/example.pug",function(e,t,a){function n(e){var t,a="",n=e||{};return function(e){a=a+'<div id="usage-container"><div class="example-container"><h1>'+pug.escape(null==(t="Example Usage")?"":t)+"</h1><p><a"+pug.attr("href",e+"/api/search/sailboats?offset=2",!0,!0)+">"+pug.escape(null==(t=e+"/api/search/sailboats?offset=2")?"":t)+"</a></p><p><a"+pug.attr("href",e+"/api/recent",!0,!0)+">"+pug.escape(null==(t=e+"/api/recent")?"":t)+'</a></p></div><div class="example-container"><h1>'+pug.escape(null==(t="Example Output")?"":t)+"</h1><p><b>"+pug.escape(null==(t="/api/search/sailboats")?"":t)+"</b><span>"+pug.escape(null==(t='[{"name":"New Blog 2: Catamaran Sailboats For Sale","imageUrl":"http://www.bing.com/cr?IG=85D1C46F6D4E4E939EA26FFF5E3FE9DE&CID=16F6A51E9738657D2B16AF7996A864DD&rd=1&h=3gBp7i0TIS6bHj9zOzGCRuZqUU49DqNRqGVlZU_WrYw&v=1&r=http%3a%2f%2fboats.glo-con.com%2fimages%2fSB1C615_s.jpg&p=DevEx,5008.1","pageUrl":"itgnewblogwallper.blogspot.com/2012/11/catamaran-sailboats-for-sale...","thumbnailUrl":"https://tse3.mm.bing.net/th?id=OIP.r2wG2X3Ja4HY0Oo6rC3x8gEKEs&pid=Api"}]')?"":t)+"</span></p><p> <b>"+pug.escape(null==(t="/api/recent")?"":t)+"</b><span>"+pug.escape(null==(t='["date":"2017-04-17T21:50:30.646Z","search":"sailboats"}]')?"":t)+"</span></p></div></div>"}.call(this,"host"in n?n.host:"undefined"!=typeof host?host:void 0),a}a.exports=n}),require.register("___globals___",function(e,t,a){})}(),require("___globals___");