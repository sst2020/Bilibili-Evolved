!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["video/player/show-upload-time"]=t():e["video/player/show-upload-time"]=t()}(self,(function(){return function(){"use strict";var e={d:function(t,o){for(var i in o)e.o(o,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:o[i]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t={};e.d(t,{component:function(){return s}});var o=coreApis.componentApis.define,i=coreApis.observer,n=coreApis.utils,a=coreApis.utils.urls,r=coreApis.componentApis.feeds.api,c=coreApis.componentApis.video.videoInfo;const s=(0,o.defineComponentMetadata)({author:{name:"wisokey",link:"https://github.com/wisokey"},name:"showUploadTime",displayName:"显示视频投稿时间",description:"为视频播放页面的推荐列表中的视频添加显示视频投稿时间.",tags:[componentsTags.video],urlInclude:a.videoUrls,entry:async()=>{const e=e=>{e.forEach((async e=>{if(!e.item.owner.mark){if(e.item.owner.mark=!0,!e.mark){let t;if(e.mark=!0,e.item.ctime)t=new Date(1e3*e.item.ctime);else{const o=new c.VideoInfo(e.item.aid);await o.fetchInfo(),t=o.createTime}e.name=`${e.name} · ${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()}`}e.item.owner.name=e.name}}))};(0,i.urlChange)((async()=>{await(0,n.playerReady)();const t=(0,r.getVueData)(dq("#reco_list")).$children.filter((e=>-1===e.$el.className.indexOf("special")));e(t)})),await(0,n.playerReady)(),(0,i.childList)(dq("#reco_list .rec-list"),(async()=>{const t=(0,r.getVueData)(dq("#reco_list"));if(t.isOpen){const o=t.$children.filter((e=>-1===e.$el.className.indexOf("special")));e(o)}}))},commitHash:"dab6500b7fe9fc61537c20c8f2426455fc5a99de",coreVersion:"2.5.0"});return t=t.component}()}));