!function(e,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports["video/seo-redirect"]=o():e["video/seo-redirect"]=o()}(globalThis,(()=>(()=>{"use strict";var e={d:(o,t)=>{for(var i in t)e.o(t,i)&&!e.o(o,i)&&Object.defineProperty(o,i,{enumerable:!0,get:t[i]})},o:(e,o)=>Object.prototype.hasOwnProperty.call(e,o)},o={};e.d(o,{component:()=>t});const t=(0,coreApis.componentApis.define.defineComponentMetadata)({name:"seoRedirect",displayName:"SEO 页面重定向",entry:()=>{window.location.assign(document.URL.replace("/s/","/"))},urlInclude:["//www.bilibili.com/s/video/"],tags:[componentsTags.video],description:{"zh-CN":"进入 SEO 视频页面时 (`https://www.bilibili.com/s/video/`) 自动跳转到原视频页面."},commitHash:"17efc32b00d137d9070e3d796133b12c1e1b65c1",coreVersion:"2.8.4"});return o=o.component})()));