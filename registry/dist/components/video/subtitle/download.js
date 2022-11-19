!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["video/subtitle/download"]=t():e["video/subtitle/download"]=t()}(globalThis,(()=>(()=>{var e,t,n={636:(e,t,n)=>{"use strict";n.d(t,{mE:()=>l});const o=coreApis.ajax;var i=n(391),r=n(674);const a=async()=>{const{SubtitleConverter:e,SubtitleSize:t,SubtitleLocation:o}=await Promise.resolve().then(n.bind(n,768)),{playerAgent:i}=await Promise.resolve().then(n.t.bind(n,833,23)),a=localStorage.getItem("bilibili_player_settings");if(!a)return[e.defaultConfig,""];const s=JSON.parse(a).subtitle,l=s.lan,c=(0,r.getFriendlyTitle)(!0),d={.6:t.VerySmall,.8:t.Small,1:t.Medium,1.3:t.Large,1.6:t.VeryLarge}[s.fontsize],u=s.color.toString(16),f=s.backgroundopacity,p={bc:o.BottomCenter,bl:o.BottomLeft,br:o.BottomRight,tc:o.TopCenter,tl:o.TopLeft,tr:o.TopRight}[s.position],g=i.query.video.element.sync();return[{title:c,height:g.videoHeight,width:g.videoWidth,color:u,location:p,opacity:f,size:d,boxPadding:1,boxMargin:32},l]},s=async(e,t)=>{const{VideoInfo:o}=await Promise.resolve().then(n.t.bind(n,77,23)),i=new o(e);return i.cid="string"==typeof t?parseInt(t):t,await i.fetchInfo(),i.subtitles},l=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{...lodash.pick(unsafeWindow,"aid","cid"),title:(0,r.getFriendlyTitle)(!0)};const{aid:l,cid:c}=t;if(!l||!c)throw new Error("未找到视频AID和CID");const d=await s(l,c);if(0===d.length)return i.Toast.info("当前视频没有字幕.","下载字幕",3e3),null;const[u,f]=await a(),p=d.find((e=>e.language===f))||d[0],g=await(0,o.getJson)(p.url),v=g.body;if("ass"===e){const{SubtitleConverter:e}=await Promise.resolve().then(n.bind(n,768)),o=new e({...u,title:t.title}),i=await o.convertToAss(v);return new Blob([i],{type:"text/ass"})}return new Blob([JSON.stringify(v)],{type:"text/json"})}},768:(e,t,n)=>{"use strict";function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(t),n.d(t,{SubtitleConverter:()=>a,SubtitleLocation:()=>i,SubtitleSize:()=>r});const i={TopLeft:7,TopCenter:8,TopRight:9,BottomLeft:1,BottomCenter:2,BottomRight:3};let r;!function(e){e[e.VerySmall=1]="VerySmall",e[e.Small=2]="Small",e[e.Medium=3]="Medium",e[e.Large=4]="Large",e[e.VeryLarge=5]="VeryLarge"}(r||(r={}));class a{constructor(e){o(this,"config",void 0),this.config=Object.assign(a.defaultConfig,e)}async getAssMeta(){const{convertHexColorForStyle:e}=await Promise.resolve().then(n.t.bind(n,726,23)),t=e(this.config.color),o=e("#000000",this.config.opacity),r=[],a=(10*(this.config.size-3)+48)*this.config.height/720;console.log(a);for(const[e,n]of Object.entries(i))r.push(`Style: ${e},微软雅黑,${a},${t},${t},${o},${o},0,0,0,0,100,100,0,0,3,${this.config.boxPadding},0,${n},${this.config.boxMargin},${this.config.boxMargin},${this.config.boxMargin},0`);return`\n[Script Info]\n; Script generated by Bilibili Evolved Danmaku Converter\n; https://github.com/the1812/Bilibili-Evolved/\nTitle: ${this.config.title}\nScriptType: v4.00+\nPlayResX: ${this.config.width}\nPlayResY: ${this.config.height}\nTimer: 10.0000\nWrapStyle: 0\nScaledBorderAndShadow: no\n\n[V4+ Styles]\nFormat: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding\n${r.join("\n")}\n\n[Events]\nFormat: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text`.trim()}async convertToAss(e){const{convertTimeByEndTime:t,normalizeContent:o}=await Promise.resolve().then(n.t.bind(n,726,23));return`${await this.getAssMeta()}\n${e.map((e=>{const[n,r]=t(e.from,e.to);var a;return`Dialogue: 0,${n},${r},${a=this.config.location,Object.entries(i).filter((e=>{let[,t]=e;return t===a})).map((e=>{let[t]=e;return t})).shift()},,0,0,0,,${o(e.content)}`})).join("\n")}`}}o(a,"defaultConfig",void 0),a.defaultConfig={title:"",color:"#ffffff",width:1920,height:1080,size:r.Medium,opacity:.5,location:i.BottomCenter,boxPadding:1,boxMargin:32}},377:(e,t,n)=>{var o=n(355)((function(e){return e[1]}));o.push([e.id,".download-subtitle-config.download-video-config-section .be-dropdown {\n  text-transform: uppercase;\n}",""]),e.exports=o},355:e=>{"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
t.i=function(e,n,o){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var i={};if(o)for(var r=0;r<this.length;r++){
// eslint-disable-next-line prefer-destructuring
var a=this[r][0];null!=a&&(i[a]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&i[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},662:(e,t,n)=>{"use strict";var o,i=function(){return void 0===o&&(
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// @see https://github.com/webpack-contrib/style-loader/issues/177
o=Boolean(window&&document&&document.all&&!window.atob)),o},r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function s(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},o=[],i=0;i<e.length;i++){var r=e[i],l=t.base?r[0]+t.base:r[0],c=n[l]||0,d="".concat(l," ").concat(c);n[l]=c+1;var u=s(d),f={css:r[1],media:r[2],sourceMap:r[3]};-1!==u?(a[u].references++,a[u].updater(f)):a.push({identifier:d,updater:m(f,t),references:1}),o.push(d)}return o}function c(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var i=n.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var a=r(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function f(e,t,n,o){var i=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=u(t,i);else{var r=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}function p(e,t,n){var o=n.css,i=n.media,r=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var g=null,v=0;function m(e,t){var n,o,i;if(t.singleton){var r=v++;n=g||(g=c(t)),o=f.bind(null,n,r,!1),i=f.bind(null,n,r,!0)}else n=c(t),o=p.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var i=s(n[o]);a[i].references--}for(var r=l(e,t),c=0;c<n.length;c++){var d=s(n[c]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}n=r}}}},903:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>f});var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"multiple-widgets"},[n("DefaultWidget",{attrs:{disabled:e.disabled,name:"下载字幕 (JSON)",icon:"subtitle"},on:{click:function(t){return e.download("json")}}}),e._v(" "),n("DefaultWidget",{attrs:{disabled:e.disabled,name:"下载字幕 (ASS)",icon:"subtitle"},on:{click:function(t){return e.download("ass")}}})],1)};o._withStripped=!0;const i=coreApis.pluginApis.data;var r=n(648);const a=coreApis.utils.log;var s=n(674);const l=coreApis.download;var c=n(636);(0,i.addData)("ui.icons",(e=>{e.subtitle='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path d="M4 4h14a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm5 5.5a1 1 0 100-2H6a2 2 0 00-2 2v3a2 2 0 002 2h3a1 1 0 000-2H7a1 1 0 01-1-1v-1a1 1 0 011-1h2zm8 0a1 1 0 000-2h-3a2 2 0 00-2 2v3a2 2 0 002 2h3a1 1 0 000-2h-2a1 1 0 01-1-1v-1a1 1 0 011-1h2z" fill-rule="evenodd"/></svg>'}));const d=Vue.extend({components:{DefaultWidget:r.DefaultWidget},data:()=>({disabled:!1}),methods:{async download(e){try{this.disabled=!0;const t=await(0,c.mE)(e);l.DownloadPackage.single(`${(0,s.getFriendlyTitle)(!0)}.${e}`,t)}catch(e){(0,a.logError)(e)}finally{this.disabled=!1}}}});var u=(0,n(769).Z)(d,o,[],!1,null,null,null);u.options.__file="registry/lib/components/video/subtitle/download/DownloadSubtitle.vue";const f=u.exports},277:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>g});var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"download-subtitle-config download-video-config-section"},[n("div",{staticClass:"download-video-config-item"},[n("div",{staticClass:"download-video-config-title"},[e._v("字幕:")]),e._v(" "),n("VDropdown",{attrs:{items:e.items},scopedSlots:e._u([{key:"item",fn:function(t){var n=t.item;return[e._v("\n        "+e._s(n)+"\n      ")]}}]),model:{value:e.type,callback:function(t){e.type=t},expression:"type"}})],1)])};o._withStripped=!0;const i=coreApis.settings;var r=n(648);const a=(0,i.getComponentSettings)("downloadVideo").options,s=Vue.extend({components:{VDropdown:r.VDropdown},data:()=>({type:a.subtitleType??"无",items:["无","ass","json"]}),computed:{enabled(){return"无"!==this.type}},watch:{type(e){a.subtitleType=e}}});var l=n(662),c=n.n(l),d=n(377),u=n.n(d),f={insert:"head",singleton:!1};c()(u(),f);u().locals;var p=(0,n(769).Z)(s,o,[],!1,null,null,null);p.options.__file="registry/lib/components/video/subtitle/download/Plugin.vue";const g=p.exports},769:(e,t,n)=>{"use strict";function o(e,t,n,o,i,r,a,s){var l,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),o&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),a?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},c._ssrRegister=l):i&&(l=s?function(){i.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:i),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(e,t){return l.call(t),d(e,t)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,l):[l]}return{exports:e,options:c}}n.d(t,{Z:()=>o})},726:e=>{"use strict";e.exports=coreApis.componentApis.video.assUtils},833:e=>{"use strict";e.exports=coreApis.componentApis.video.playerAgent},77:e=>{"use strict";e.exports=coreApis.componentApis.video.videoInfo},391:e=>{"use strict";e.exports=coreApis.toast},648:e=>{"use strict";e.exports=coreApis.ui},674:e=>{"use strict";e.exports=coreApis.utils.title}},o={};function i(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={id:e,exports:{}};return n[e](r,r.exports,i),r.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"==typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"==typeof n.then)return n}var r=Object.create(null);i.r(r);var a={};e=e||[null,t({}),t([]),t(t)];for(var s=2&o&&n;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>a[e]=()=>n[e]));return a.default=()=>n,i.d(r,a),r},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return(()=>{"use strict";i.d(r,{component:()=>s});const e=coreApis.componentApis.define,t=coreApis.spinQuery;var n=i(391);const o=coreApis.utils.urls;var a=i(636);const s=(0,e.defineComponentMetadata)({name:"downloadSubtitle",displayName:"下载字幕",description:{"zh-CN":"启用下载字幕支持, 在视频页面中可从功能面板里下载字幕."},tags:[componentsTags.video],entry:none,urlInclude:o.videoUrls,widget:{condition:t.hasVideo,component:()=>Promise.resolve().then(i.bind(i,903)).then((e=>e.default))},plugin:{displayName:"下载视频 - 下载字幕支持",setup:e=>{let{addData:t}=e;t("downloadVideo.assets",(async e=>{e.push({name:"downloadSubtitles",displayName:"下载字幕",getAssets:async(e,t)=>{const{type:o,enabled:i}=t;if(!i)return[];const r=n.Toast.info("获取字幕中...","下载字幕");let s=0;const l=await Promise.allSettled(e.map((async t=>{const n=await(0,a.mE)(o,t.input);return s++,r.message=`获取字幕中... (${s}/${e.length})`,{name:`${t.input.title}.${o}`,data:n}}))),c=l.filter((e=>"fulfilled"===e.status)),d=l.filter((e=>"rejected"===e.status));return r.message=`获取完成. 成功 ${c.length} 个, 失败 ${d.length} 个.`,c.map((e=>e.value))},component:()=>Promise.resolve().then(i.bind(i,277)).then((e=>e.default))})}))}},commitHash:"251d81376fa8b79862fa914317ed2c571bb06ca4",coreVersion:"2.5.2"})})(),r=r.component})()));