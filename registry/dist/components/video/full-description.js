!function(e,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports["video/full-description"]=o():e["video/full-description"]=o()}(globalThis,(()=>(()=>{var e={222:(e,o,n)=>{var t=n(218)((function(e){return e[1]}));t.push([e.id,".video-desc .info,\n.video-desc .desc-info,\n.video-desc-v1 .desc-info,\n.video-desc-container .basic-desc-info,\n.play-up-info .play-up-self {\n  height: auto !important;\n}\n\n.video-desc .btn,\n.video-desc .toggle-btn,\n.video-desc-container .toggle-btn,\n.video-desc-v1 .toggle-btn,\n.play-up-info .play-up-self-btn {\n  display: none !important;\n}",""]),e.exports=t},218:e=>{"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var o=[];return o.toString=function(){return this.map((function(o){var n=e(o);return o[2]?"@media ".concat(o[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
o.i=function(e,n,t){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var i={};if(t)for(var r=0;r<this.length;r++){
// eslint-disable-next-line prefer-destructuring
var s=this[r][0];null!=s&&(i[s]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);t&&i[d[0]]||(n&&(d[2]?d[2]="".concat(n," and ").concat(d[2]):d[2]=n),o.push(d))}},o}},399:(e,o,n)=>{var t=n(222);t&&t.__esModule&&(t=t.default),e.exports="string"==typeof t?t:t.toString()}},o={};function n(t){var i=o[t];if(void 0!==i)return i.exports;var r=o[t]={id:t,exports:{}};return e[t](r,r.exports,n),r.exports}n.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return n.d(o,{a:o}),o},n.d=(e,o)=>{for(var t in o)n.o(o,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})},n.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o);var t={};return(()=>{"use strict";n.d(t,{component:()=>l});const e=coreApis.componentApis.define,o=coreApis.utils.urls,i=coreApis.observer,r=coreApis.spinQuery,s=coreApis.style;var c=n(399),d=n.n(c);const a="fullVideoDescription",p=()=>{(0,s.addStyle)(d(),a),(0,i.videoChange)((async()=>{const e=await(0,r.select)(".video-desc, .video-desc-v1, .video-desc-container");if(!e)return;(await(0,r.sq)((()=>dq(e,'[report-id="abstract_spread"], .toggle-btn')),(e=>e&&"none"!==e.style.display)))?.click()}))},l=(0,e.defineComponentMetadata)({name:a,entry:p,reload:p,unload:()=>{(0,s.removeStyle)(a)},displayName:"展开视频简介",tags:[componentsTags.video,componentsTags.style],description:{"zh-CN":"总是展开完整的视频简介."},urlInclude:o.videoAndBangumiUrls,commitHash:"17efc32b00d137d9070e3d796133b12c1e1b65c1",coreVersion:"2.8.4"})})(),t=t.component})()));