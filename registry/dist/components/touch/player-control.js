!function(e,l){"object"==typeof exports&&"object"==typeof module?module.exports=l():"function"==typeof define&&define.amd?define([],l):"object"==typeof exports?exports["touch/player-control"]=l():e["touch/player-control"]=l()}(self,(function(){return function(){var e,l,r={970:function(e,l,r){var i=r(645)((function(e){return e[1]}));i.push([e.id,'body.touch-player-control .bilibili-player * {\n  -webkit-tap-highlight-color: transparent !important;\n}\nbody.touch-player-control .bilibili-player .bilibili-player-area .bilibili-player-video-control-wrap {\n  padding: 0 !important;\n}\nbody.touch-player-control .bilibili-player .bilibili-player-area .bilibili-player-video-control-wrap .bilibili-player-video-btn {\n  height: 100% !important;\n  padding-left: 2px !important;\n  padding-right: 2px !important;\n}\nbody.touch-player-control .bilibili-player .bilibili-player-area .bilibili-player-video-control-wrap .bilibili-player-video-btn.bilibili-player-video-btn-start {\n  padding-left: 22px !important;\n}\nbody.touch-player-control .bilibili-player .bilibili-player-area .bilibili-player-video-control-wrap .bilibili-player-video-btn.bilibili-player-video-btn-fullscreen {\n  padding-right: 18px !important;\n}\nbody.touch-player-control .bilibili-player .bilibili-player-area .bilibili-player-video-control-wrap .bilibili-player-video-btn-pagelist {\n  width: 36px !important;\n}\nbody.touch-player-control .bilibili-player .bilibili-player-area .bilibili-player-video-control-wrap .bilibili-player-video-btn-pagelist .bilibili-player-video-btn-name {\n  display: none !important;\n}\nbody.touch-player-control .bilibili-player .bilibili-player-area .bilibili-player-video-control-wrap .bilibili-player-video-btn-pagelist::before {\n  content: "\\f0279";\n  display: block;\n  width: 36px;\n  color: #eee;\n  font: normal normal normal 20px/1 "Material Design Icons";\n  text-rendering: auto;\n  line-height: inherit;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nbody.touch-player-control .bilibili-player .bilibili-player-area .bilibili-player-video-control-wrap .bilibili-player-video-btn-speed {\n  width: 36px !important;\n}\nbody.touch-player-control .bilibili-player .bilibili-player-area .bilibili-player-video-control-wrap .bilibili-player-video-btn-speed-name {\n  display: none !important;\n}\nbody.touch-player-control .bilibili-player .bilibili-player-area .bilibili-player-video-control-wrap .bilibili-player-video-btn-speed::before {\n  content: "\\f08ff";\n  display: block;\n  width: 36px;\n  color: #eee;\n  font: normal normal normal 20px/1 "Material Design Icons";\n  text-rendering: auto;\n  line-height: inherit;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nbody.touch-player-control .bilibili-player .bilibili-player-area #bilibili_pbp_pin {\n  right: 0 !important;\n}\nbody.player-mode-webfullscreen.touch-player-control .bilibili-player .bilibili-player-area .bilibili-player-video-control-bottom-center, body.player-fullscreen-fix.touch-player-control .bilibili-player .bilibili-player-area .bilibili-player-video-control-bottom-center, body.player-full-win.touch-player-control .bilibili-player .bilibili-player-area .bilibili-player-video-control-bottom-center {\n  padding: 0 12px !important;\n}\nbody.player-mode-webfullscreen.touch-player-control .bilibili-player .bilibili-player-area .bilibili-player-video-btn, body.player-fullscreen-fix.touch-player-control .bilibili-player .bilibili-player-area .bilibili-player-video-btn, body.player-full-win.touch-player-control .bilibili-player .bilibili-player-area .bilibili-player-video-btn {\n  flex-shrink: 0 !important;\n  flex-basis: 48px !important;\n}\nbody.player-mode-webfullscreen.touch-player-control .bilibili-player .bilibili-player-area .bilibili-player-video-btn-speed,\nbody.player-mode-webfullscreen.touch-player-control .bilibili-player .bilibili-player-area .bilibili-player-video-btn-pagelist, body.player-fullscreen-fix.touch-player-control .bilibili-player .bilibili-player-area .bilibili-player-video-btn-speed,\nbody.player-fullscreen-fix.touch-player-control .bilibili-player .bilibili-player-area .bilibili-player-video-btn-pagelist, body.player-full-win.touch-player-control .bilibili-player .bilibili-player-area .bilibili-player-video-btn-speed,\nbody.player-full-win.touch-player-control .bilibili-player .bilibili-player-area .bilibili-player-video-btn-pagelist {\n  width: 54px !important;\n}\nbody.player-mode-webfullscreen.touch-player-control .bilibili-player .bilibili-player-area .bilibili-player-video-btn-speed::before,\nbody.player-mode-webfullscreen.touch-player-control .bilibili-player .bilibili-player-area .bilibili-player-video-btn-pagelist::before, body.player-fullscreen-fix.touch-player-control .bilibili-player .bilibili-player-area .bilibili-player-video-btn-speed::before,\nbody.player-fullscreen-fix.touch-player-control .bilibili-player .bilibili-player-area .bilibili-player-video-btn-pagelist::before, body.player-full-win.touch-player-control .bilibili-player .bilibili-player-area .bilibili-player-video-btn-speed::before,\nbody.player-full-win.touch-player-control .bilibili-player .bilibili-player-area .bilibili-player-video-btn-pagelist::before {\n  width: 50px;\n  font-size: 26px;\n}\nbody.player-mode-webfullscreen.touch-player-control .bilibili-player .bilibili-player-area .bilibili-player-video-btn-start, body.player-fullscreen-fix.touch-player-control .bilibili-player .bilibili-player-area .bilibili-player-video-btn-start, body.player-full-win.touch-player-control .bilibili-player .bilibili-player-area .bilibili-player-video-btn-start {\n  padding-top: 0 !important;\n}\nbody.player-mode-webfullscreen.touch-player-control .bilibili-player .bilibili-player-area .bilibili-player-video-danmaku-switch, body.player-fullscreen-fix.touch-player-control .bilibili-player .bilibili-player-area .bilibili-player-video-danmaku-switch, body.player-full-win.touch-player-control .bilibili-player .bilibili-player-area .bilibili-player-video-danmaku-switch {\n  padding-left: 0 !important;\n}\n\nbody.touch-player-control .bpx-player-video-area .squirtle-controller {\n  height: 48px !important;\n}\nbody.touch-player-control .bpx-player-video-area .squirtle-controller .squirtle-controller-wrap {\n  height: 30px !important;\n  padding: 14px 6px 4px !important;\n}\nbody.touch-player-control .bpx-player-video-area .squirtle-controller .squirtle-controller-wrap .squirtle-play-wrap {\n  padding-left: 10px !important;\n}\nbody.touch-player-control .bpx-player-video-area .squirtle-controller .squirtle-controller-wrap .squirtle-pagelist-wrap {\n  width: 36px !important;\n}\nbody.touch-player-control .bpx-player-video-area .squirtle-controller .squirtle-controller-wrap .squirtle-pagelist-wrap .squirtle-select-result {\n  display: none !important;\n}\nbody.touch-player-control .bpx-player-video-area .squirtle-controller .squirtle-controller-wrap .squirtle-pagelist-wrap .squirtle-video-pagelist::before {\n  content: "\\f0279";\n  display: block;\n  width: 36px;\n  color: #eee;\n  font: normal normal normal 20px/1 "Material Design Icons";\n  text-rendering: auto;\n  line-height: inherit;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nbody.touch-player-control .bpx-player-video-area .squirtle-controller .squirtle-controller-wrap .squirtle-speed-wrap {\n  width: 36px !important;\n}\nbody.touch-player-control .bpx-player-video-area .squirtle-controller .squirtle-controller-wrap .squirtle-speed-wrap .squirtle-select-result {\n  display: none !important;\n}\nbody.touch-player-control .bpx-player-video-area .squirtle-controller .squirtle-controller-wrap .squirtle-speed-wrap .squirtle-video-speed::before {\n  content: "\\f08ff";\n  display: block;\n  width: 36px;\n  color: #eee;\n  font: normal normal normal 20px/1 "Material Design Icons";\n  text-rendering: auto;\n  line-height: inherit;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nbody.touch-player-control .bpx-player-video-area .squirtle-controller .squirtle-high-energy.ease {\n  bottom: 2px !important;\n}\nbody.touch-player-control .bpx-player-video-area .squirtle-controller .squirtle-high-energy,\nbody.touch-player-control .bpx-player-video-area .squirtle-controller .squirtle-progress-common {\n  width: 100% !important;\n  margin: 0 !important;\n}\nbody.touch-player-control .bpx-player-video-area .squirtle-controller #bilibili_pbp_pin {\n  right: 0 !important;\n}\nbody.touch-player-control .bpx-player-video-area .bpx-player-control-top,\nbody.touch-player-control .bpx-player-video-area .bpx-player-control-bottom {\n  padding: 0 !important;\n}\nbody.touch-player-control .bpx-player-video-area .bpx-player-pbp {\n  padding: 0 !important;\n  left: 0 !important;\n  width: 100% !important;\n}\nbody.touch-player-control .bpx-player-video-area .bpx-player-ctrl-btn {\n  height: 100% !important;\n  padding-left: 2px !important;\n  padding-right: 2px !important;\n}\nbody.touch-player-control .bpx-player-video-area .bpx-player-ctrl-btn.bpx-player-ctrl-play {\n  padding-left: 12px !important;\n}\nbody.touch-player-control .bpx-player-video-area .bpx-player-ctrl-btn.bpx-player-ctrl-full {\n  padding-right: 12px !important;\n}\nbody.player-mode-webfullscreen.touch-player-control .bpx-player-video-area .squirtle-controller, body.player-fullscreen-fix.touch-player-control .bpx-player-video-area .squirtle-controller, body.player-full-win.touch-player-control .bpx-player-video-area .squirtle-controller {\n  height: 72px !important;\n}\nbody.player-mode-webfullscreen.touch-player-control .bpx-player-video-area .squirtle-controller .squirtle-controller-wrap, body.player-fullscreen-fix.touch-player-control .bpx-player-video-area .squirtle-controller .squirtle-controller-wrap, body.player-full-win.touch-player-control .bpx-player-video-area .squirtle-controller .squirtle-controller-wrap {\n  height: 50px !important;\n  padding: 16px 6px 0 !important;\n}\nbody.player-mode-webfullscreen.touch-player-control .bpx-player-video-area .squirtle-controller .squirtle-controller-wrap .squirtle-sendbar-wrap, body.player-fullscreen-fix.touch-player-control .bpx-player-video-area .squirtle-controller .squirtle-controller-wrap .squirtle-sendbar-wrap, body.player-full-win.touch-player-control .bpx-player-video-area .squirtle-controller .squirtle-controller-wrap .squirtle-sendbar-wrap {\n  align-items: center !important;\n}\nbody.player-mode-webfullscreen.touch-player-control .bpx-player-video-area .squirtle-controller .squirtle-controller-wrap .squirtle-pagelist-wrap,\nbody.player-mode-webfullscreen.touch-player-control .bpx-player-video-area .squirtle-controller .squirtle-controller-wrap .squirtle-speed-wrap, body.player-fullscreen-fix.touch-player-control .bpx-player-video-area .squirtle-controller .squirtle-controller-wrap .squirtle-pagelist-wrap,\nbody.player-fullscreen-fix.touch-player-control .bpx-player-video-area .squirtle-controller .squirtle-controller-wrap .squirtle-speed-wrap, body.player-full-win.touch-player-control .bpx-player-video-area .squirtle-controller .squirtle-controller-wrap .squirtle-pagelist-wrap,\nbody.player-full-win.touch-player-control .bpx-player-video-area .squirtle-controller .squirtle-controller-wrap .squirtle-speed-wrap {\n  width: 54px !important;\n}\nbody.player-mode-webfullscreen.touch-player-control .bpx-player-video-area .squirtle-controller .squirtle-controller-wrap .squirtle-pagelist-wrap .squirtle-video-pagelist::before,\nbody.player-mode-webfullscreen.touch-player-control .bpx-player-video-area .squirtle-controller .squirtle-controller-wrap .squirtle-pagelist-wrap .squirtle-video-speed::before,\nbody.player-mode-webfullscreen.touch-player-control .bpx-player-video-area .squirtle-controller .squirtle-controller-wrap .squirtle-speed-wrap .squirtle-video-pagelist::before,\nbody.player-mode-webfullscreen.touch-player-control .bpx-player-video-area .squirtle-controller .squirtle-controller-wrap .squirtle-speed-wrap .squirtle-video-speed::before, body.player-fullscreen-fix.touch-player-control .bpx-player-video-area .squirtle-controller .squirtle-controller-wrap .squirtle-pagelist-wrap .squirtle-video-pagelist::before,\nbody.player-fullscreen-fix.touch-player-control .bpx-player-video-area .squirtle-controller .squirtle-controller-wrap .squirtle-pagelist-wrap .squirtle-video-speed::before,\nbody.player-fullscreen-fix.touch-player-control .bpx-player-video-area .squirtle-controller .squirtle-controller-wrap .squirtle-speed-wrap .squirtle-video-pagelist::before,\nbody.player-fullscreen-fix.touch-player-control .bpx-player-video-area .squirtle-controller .squirtle-controller-wrap .squirtle-speed-wrap .squirtle-video-speed::before, body.player-full-win.touch-player-control .bpx-player-video-area .squirtle-controller .squirtle-controller-wrap .squirtle-pagelist-wrap .squirtle-video-pagelist::before,\nbody.player-full-win.touch-player-control .bpx-player-video-area .squirtle-controller .squirtle-controller-wrap .squirtle-pagelist-wrap .squirtle-video-speed::before,\nbody.player-full-win.touch-player-control .bpx-player-video-area .squirtle-controller .squirtle-controller-wrap .squirtle-speed-wrap .squirtle-video-pagelist::before,\nbody.player-full-win.touch-player-control .bpx-player-video-area .squirtle-controller .squirtle-controller-wrap .squirtle-speed-wrap .squirtle-video-speed::before {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 50px;\n  font-size: 26px;\n}',""]),e.exports=i},645:function(e){"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var l=[];return l.toString=function(){return this.map((function(l){var r=e(l);return l[2]?"@media ".concat(l[2]," {").concat(r,"}"):r})).join("")},
// eslint-disable-next-line func-names
l.i=function(e,r,i){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var o={};if(i)for(var t=0;t<this.length;t++){
// eslint-disable-next-line prefer-destructuring
var a=this[t][0];null!=a&&(o[a]=!0)}for(var n=0;n<e.length;n++){var p=[].concat(e[n]);i&&o[p[0]]||(r&&(p[2]?p[2]="".concat(r," and ").concat(p[2]):p[2]=r),l.push(p))}},l}},382:function(e,l,r){var i=r(970);i&&i.__esModule&&(i=i.default),e.exports="string"==typeof i?i:i.toString()}},i={};function o(e){var l=i[e];if(void 0!==l)return l.exports;var t=i[e]={id:e,exports:{}};return r[e](t,t.exports,o),t.exports}l=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},o.t=function(r,i){if(1&i&&(r=this(r)),8&i)return r;if("object"==typeof r&&r){if(4&i&&r.__esModule)return r;if(16&i&&"function"==typeof r.then)return r}var t=Object.create(null);o.r(t);var a={};e=e||[null,l({}),l([]),l(l)];for(var n=2&i&&r;"object"==typeof n&&!~e.indexOf(n);n=l(n))Object.getOwnPropertyNames(n).forEach((function(e){a[e]=function(){return r[e]}}));return a.default=function(){return r},o.d(t,a),t},o.d=function(e,l){for(var r in l)o.o(l,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:l[r]})},o.o=function(e,l){return Object.prototype.hasOwnProperty.call(e,l)},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var t={};return function(){"use strict";o.d(t,{component:function(){return i}});var e=coreApis.utils.urls;const l="touch-player-control",r=async()=>{document.body.classList.add(l)},i={name:"touchPlayerControl",displayName:"控制栏触摸优化",description:{"zh-CN":"增大播放器控制栏里按钮的间距, 方便触屏使用."},tags:[componentsTags.touch,componentsTags.style],enabledByDefault:navigator.maxTouchPoints>0,urlInclude:e.playerUrls,instantStyles:[{name:l,style:()=>Promise.resolve().then(o.t.bind(o,382,23))}],entry:r,reload:r,unload:()=>{document.body.classList.remove(l)},commitHash:"1e0669f4a917122e6f9abab297d3f73246c2fcbd",coreVersion:"2.4.0"}}(),t=t.component}()}));