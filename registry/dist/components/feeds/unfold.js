!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["feeds/unfold"]=t():e["feeds/unfold"]=t()}(self,(function(){return function(){"use strict";var e,t,n={799:function(e){e.exports=coreApis.componentApis.feeds.api}},o={};function r(e){var t=o[e];if(void 0!==t)return t.exports;var f=o[e]={exports:{}};return n[e](f,f.exports,r),f.exports}t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},r.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"==typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"==typeof n.then)return n}var f=Object.create(null);r.r(f);var c={};e=e||[null,t({}),t([]),t(t)];for(var i=2&o&&n;"object"==typeof i&&!~e.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((function(e){c[e]=function(){return n[e]}}));return c.default=function(){return n},r.d(f,c),f},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var f={};return function(){r.d(f,{component:function(){return n}});var e=coreApis.spinQuery,t=coreApis.utils.urls;const n={name:"unfoldFeeds",displayName:"动态反折叠",tags:[componentsTags.feeds],description:{"zh-CN":"\n自动展开被折叠的动态.\n\n动态被折叠可能是因为:\n- 短时间内大量更新作品\n- 多人转发同一个作品\n- 被审核折叠\n"},urlInclude:t.feedsUrlsWithoutDetail,entry:async()=>{const{forEachFeedsCard:t}=await Promise.resolve().then(r.t.bind(r,799,23));t({added:async t=>{const n=await(0,e.select)((()=>dq(t.element,".fold-hoverable, .bili-dyn-item-fold")));null==n||n.click()}})},commitHash:"dab6500b7fe9fc61537c20c8f2426455fc5a99de",coreVersion:"2.5.0"}}(),f=f.component}()}));