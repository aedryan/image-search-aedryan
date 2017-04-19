!function(){"use strict";var e="undefined"==typeof global?self:global;if("function"!=typeof e.require){var t={},r={},n={},i={}.hasOwnProperty,s=/^\.\.?(\/|$)/,a=function(e,t){for(var r,n=[],i=(s.test(t)?e+"/"+t:t).split("/"),a=0,o=i.length;a<o;a++)r=i[a],".."===r?n.pop():"."!==r&&""!==r&&n.push(r);return n.join("/")},o=function(e){return e.split("/").slice(0,-1).join("/")},c=function(t){return function(r){var n=a(o(t),r);return e.require(n,t)}},u=function(e,t){var n=v&&v.createHot(e),i={id:e,exports:{},hot:n};return r[e]=i,t(i.exports,c(e),i),i.exports},l=function(e){return n[e]?l(n[e]):e},f=function(e,t){return l(a(o(e),t))},p=function(e,n){null==n&&(n="/");var s=l(e);if(i.call(r,s))return r[s].exports;if(i.call(t,s))return u(s,t[s]);throw new Error("Cannot find module '"+e+"' from '"+n+"'")};p.alias=function(e,t){n[t]=e};var d=/\.[^.\/]+$/,h=/\/index(\.[^\/]+)?$/,g=function(e){if(d.test(e)){var t=e.replace(d,"");i.call(n,t)&&n[t].replace(d,"")!==t+"/index"||(n[t]=e)}if(h.test(e)){var r=e.replace(h,"");i.call(n,r)||(n[r]=e)}};p.register=p.define=function(e,n){if(e&&"object"==typeof e)for(var s in e)i.call(e,s)&&p.register(s,e[s]);else t[e]=n,delete r[e],g(e)},p.list=function(){var e=[];for(var r in t)i.call(t,r)&&e.push(r);return e};var v=e._hmr&&new e._hmr(f,p,t,r);p._cache=r,p.hmr=v&&v.wrap,p.brunch=!0,e.require=p}}(),function(){"undefined"==typeof window?this:window;require.register("js/app.js",function(e,t,r){"use strict";!function(){document.addEventListener("DOMContentLoaded",function(){var e=t("js/image-search"),r=t("views/body.pug"),n=t("views/example.pug"),i=window.location.protocol+"//"+window.location.hostname+("localhost"===window.location.hostname?":"+window.location.port:"");document.body.innerHTML=r()+n({host:i}),e.init(i)})}()}),require.register("js/image-search.js",function(e,t,r){"use strict";!function(){r.exports={props:{images:[],apiPath:"",searchField:null,offsetField:null,searchButton:null,resultsTable:null,recentsTable:null},init:function(e){this.props.apiPath=e,this.props.searchField=document.getElementById("search-input"),this.props.offsetField=document.getElementById("offset-input"),this.props.searchButton=document.getElementById("search-button"),this.props.resultsTable=document.getElementById("results-table"),this.props.recentsTable=document.getElementById("recents-table"),this.bindEvents(),this.render()},bindEvents:function(){var e=this;this.props.searchButton.onclick=function(){var t=e.props.searchField.value,r=e.props.offsetField.value,n=r?r:0;e.getImages(t,n)},document.onclick=function(t){t&&t.target&&t.target.classList&&t.target.classList.contains("recent-search")&&e.getImages(t.target.text,0)}},render:function(){var e=this;this.props.recentsTable.innerHTML='<tr class="loader-container"><td><div class="loader"></div></td></tr>',this.getData(this.props.apiPath+"/api/recent",function(t){t.length>0?e.props.recentsTable.innerHTML=t.reduce(function(e,t){return e+='                            <tr>                                <td><a class="recent-search" href="javascript:void(0)">'+decodeURIComponent(t.search)+"</a></td>                            </tr>                        "},""):e.props.recentsTable.innerHTML=""}),this.props.images.length>0?this.props.resultsTable.innerHTML=this.props.images.reduce(function(e,t){return e+='                        <tr>                            <td><img src="'+t.thumbnailUrl+'" /></td>                            <td><a target="_blank" href="'+t.imageUrl+'">'+t.name+"</a></td>                        </tr>                    "},""):this.props.resultsTable.innerHTML=""},getData:function(e,t){var r=new XMLHttpRequest;r.onreadystatechange=function(){4===this.readyState&&200===this.status&&t(JSON.parse(r.response))},r.open("GET",e,!0),r.send()},getImages:function(e,t){var r=this;this.props.resultsTable.innerHTML='<tr class="loader-container"><td><div class="loader"></div></td></tr>',this.getData(this.props.apiPath+"/api/search/"+e+"?offset="+t,function(e){r.props.images=e,r.render()})}}}()}),require.register("___globals___",function(e,t,r){})}(),require("___globals___"),function(e){"use strict";function t(e,r){if(1===arguments.length){for(var n=e[0],i=1;i<e.length;i++)n=t(n,e[i]);return n}for(var a in r)if("class"===a){var o=e[a]||[];e[a]=(Array.isArray(o)?o:[o]).concat(r[a]||[])}else if("style"===a){var o=s(e[a]),c=s(r[a]);e[a]=o+c}else e[a]=r[a];return e}function r(e,t){for(var r,n="",s="",a=Array.isArray(t),o=0;o<e.length;o++)r=i(e[o]),r&&(a&&t[o]&&(r=c(r)),n=n+s+r,s=" ");return n}function n(e){var t="",r="";for(var n in e)n&&e[n]&&l.call(e,n)&&(t=t+r+n,r=" ");return t}function i(e,t){return Array.isArray(e)?r(e,t):e&&"object"==typeof e?n(e):e||""}function s(e){if(!e)return"";if("object"==typeof e){var t="";for(var r in e)l.call(e,r)&&(t=t+r+":"+e[r]+";");return t}return e+="",";"!==e[e.length-1]?e+";":e}function a(e,t,r,n){return t!==!1&&null!=t&&(t||"class"!==e&&"style"!==e)?t===!0?" "+(n?e:e+'="'+e+'"'):("function"==typeof t.toJSON&&(t=t.toJSON()),"string"==typeof t||(t=JSON.stringify(t),r||t.indexOf('"')===-1)?(r&&(t=c(t))," "+e+'="'+t+'"'):" "+e+"='"+t.replace(/'/g,"&#39;")+"'"):""}function o(e,t){var r="";for(var n in e)if(l.call(e,n)){var o=e[n];if("class"===n){o=i(o),r=a(n,o,!1,t)+r;continue}"style"===n&&(o=s(o)),r+=a(n,o,!1,t)}return r}function c(e){var t=""+e,r=f.exec(t);if(!r)return e;var n,i,s,a="";for(n=r.index,i=0;n<t.length;n++){switch(t.charCodeAt(n)){case 34:s="&quot;";break;case 38:s="&amp;";break;case 60:s="&lt;";break;case 62:s="&gt;";break;default:continue}i!==n&&(a+=t.substring(i,n)),i=n+1,a+=s}return i!==n?a+t.substring(i,n):a}function u(e,t,r,n){if(!(e instanceof Error))throw e;if(!("undefined"==typeof window&&t||n))throw e.message+=" on line "+r,e;try{n=n||require("fs").readFileSync(t,"utf8")}catch(i){u(e,null,r)}var s=3,a=n.split("\n"),o=Math.max(r-s,0),c=Math.min(a.length,r+s),s=a.slice(o,c).map(function(e,t){var n=t+o+1;return(n==r?"  > ":"    ")+n+"| "+e}).join("\n");throw e.path=t,e.message=(t||"Pug")+":"+r+"\n"+s+"\n\n"+e.message,e}var l=Object.prototype.hasOwnProperty;e.merge=t,e.classes=i,e.style=s,e.attr=a,e.attrs=o;var f=/["&<>]/;e.escape=c,e.rethrow=u}("object"==typeof pug&&pug||"object"==typeof module&&module.exports||(this.pug={}));