!function(e,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports["video/av-url"]=o():e["video/av-url"]=o()}(globalThis,(()=>(()=>{"use strict";var e={d:(o,t)=>{for(var i in t)e.o(t,i)&&!e.o(o,i)&&Object.defineProperty(o,i,{enumerable:!0,get:t[i]})},o:(e,o)=>Object.prototype.hasOwnProperty.call(e,o)},o={};e.d(o,{component:()=>c});const t=coreApis.componentApis.define,i=coreApis.lifeCycle,n=coreApis.observer,r=coreApis.spinQuery,s=coreApis.utils.urls,c=(0,t.defineComponentMetadata)({name:"avUrl",displayName:"网址AV号转换",description:{"zh-CN":"当视频的链接是BV号时, 自动转换为AV号. 请注意这会导致浏览器历史记录出现重复的标题 (分别是转换前后的网址), 并可能导致后退要多退几次."},entry:()=>{(0,i.fullyLoaded)((()=>{(0,n.urlChange)((async()=>{const e=await(0,r.select)((()=>unsafeWindow.aid));if(!e)return;if(document.URL.includes("videocard_series"))return void console.log("skip video series");const o=document.URL.replace(/\/(video|bangumi)\/(BV[\w]+)/i,((o,t)=>`/${t}/av${e}`));document.URL!==o&&window.history.replaceState(history.state,"",o)}))}))},tags:[componentsTags.video,componentsTags.utils],urlInclude:s.videoUrls,commitHash:"9f446110e5ecf36dcf31bebc0c7f9c93c5d48de3",coreVersion:"2.8.8"});return o=o.component})()));