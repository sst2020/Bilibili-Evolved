!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["utils/subscribe-time-show"]=t():e["utils/subscribe-time-show"]=t()}(globalThis,(()=>(()=>{var e,t,n={663:(e,t,n)=>{var o=n(218)((function(e){return e[1]}));o.push([e.id,'@charset "UTF-8";\n/* 上移原名称 */\n#page-follows .list-item .content .title {\n  margin-top: -9px;\n}\n\n/* 上移原简介/官方认证 */\n#page-follows .list-item .content p {\n  margin-top: -1px;\n}\n\n/* 修复关注时间元素的高度带来的布局影响 */\n.subscribe-time-fix {\n  margin-bottom: -10px;\n}',""]),e.exports=o},218:e=>{"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
t.i=function(e,n,o){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var s=this[i][0];null!=s&&(r[s]=!0)}for(var c=0;c<e.length;c++){var a=[].concat(e[c]);o&&r[a[0]]||(n&&(a[2]?a[2]="".concat(n," and ").concat(a[2]):a[2]=n),t.push(a))}},t}},646:(e,t,n)=>{var o=n(663);o&&o.__esModule&&(o=o.default),e.exports="string"==typeof o?o:o.toString()},356:e=>{"use strict";e.exports=coreApis.style}},o={};function r(e){var t=o[e];if(void 0!==t)return t.exports;var i=o[e]={id:e,exports:{}};return n[e](i,i.exports,r),i.exports}t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"==typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"==typeof n.then)return n}var i=Object.create(null);r.r(i);var s={};e=e||[null,t({}),t([]),t(t)];for(var c=2&o&&n;"object"==typeof c&&!~e.indexOf(c);c=t(c))Object.getOwnPropertyNames(c).forEach((e=>s[e]=()=>n[e]));return s.default=()=>n,r.d(i,s),i},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return(()=>{"use strict";r.d(i,{component:()=>c});const e=coreApis.componentApis.define,t=coreApis.observer,n=coreApis.spinQuery;let o,s;const c=(0,e.defineComponentMetadata)({name:"subscribeTimeShow",author:{name:"Light_Quanta",link:"https://github.com/LightQuanta"},displayName:"关注时间显示",tags:[componentsTags.utils],urlInclude:[/^https:\/\/space\.bilibili\.com/],entry:async()=>{const e=await(0,n.select)(".s-space");(0,t.childList)(e,(async()=>{document.URL.match(/^https:\/\/space\.bilibili\.com\/\d+\/fans/)&&(o=await(0,n.select)(".relation-list"),(async e=>{const[n]=(0,t.childList)(e,(()=>{
// eslint-disable-next-line no-underscore-dangle
const e=o.parentElement.parentElement.parentElement.parentElement.__vue__.relationList.map((e=>e.mtime));o.querySelectorAll(".list-item>.content").forEach(((t,n)=>{if(null===t.querySelector(".subscribe-time-fix")){const o=e[n];void 0!==o&&t.querySelector("p").insertAdjacentHTML("afterend",`<div class="desc subscribe-time-fix">关注时间:${new Date(1e3*o).toLocaleString()}</div>`)}}))}));s?.disconnect(),s=n;const{addImportantStyle:i}=await Promise.resolve().then(r.t.bind(r,356,23)),{default:c}=await Promise.resolve().then(r.t.bind(r,646,23));i(c,"subscribe-time-style")})(o))}))},description:{"zh-CN":"在粉丝/关注列表显示关注的具体时间"},commitHash:"17efc32b00d137d9070e3d796133b12c1e1b65c1",coreVersion:"2.8.4"})})(),i=i.component})()));