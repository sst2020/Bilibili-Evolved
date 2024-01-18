!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["video/player/intersection-actions"]=t():e["video/player/intersection-actions"]=t()}(globalThis,(()=>(()=>{"use strict";var e={d:(t,o)=>{for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};e.d(t,{component:()=>d});const o=coreApis.componentApis.define,n=coreApis.componentApis.video.playerAgent,a=coreApis.componentApis.video.playerLight,i=coreApis.observer,s=coreApis.settings,r=coreApis.utils.urls;var p=function(e){return e.Top="视频顶部",e.Medium="视频中间",e.Bottom="视频底部",e}(p||{});const d=(0,o.defineComponentMetadata)({name:"playerIntersectionActions",author:{name:"Waua",link:"https://github.com/FoundTheWOUT"},tags:[componentsTags.video],urlInclude:r.allVideoUrls,entry:async e=>{let{settings:{options:t},metadata:o}=e;const r=t;Promise.resolve().then((async()=>{const{query:{video:e}}=n.playerAgent,t=await e.element(),d=document.getElementById("video-player")??(dq(".player-wrap")||dq(".player-module"));let l,c=!0;function u(e){switch(e){case p.Top:return 1;case p.Medium:return.5;case p.Bottom:return 0;default:return.5}}function m(){l.observe(d)}function y(){l.unobserve(d)}const g=e=>new IntersectionObserver((e=>{let[o]=e;o.isIntersecting?c||(c=!0,r.pause&&t.paused&&t.play(),r.light&&(0,s.getComponentSettings)("playerAutoLight").enabled&&!r.pause&&!t.paused&&(0,a.lightOff)()):(t.paused||(c=!1),r.pause&&!t.paused&&t.pause(),r.light&&(0,s.getComponentSettings)("playerAutoLight").enabled&&!r.pause&&(0,a.lightOn)())}),{threshold:u(e||r.triggerLocation)});(0,s.addComponentListener)(`${o.name}.triggerLocation`,(e=>{y(),l=g(e),m()})),l=g(),(0,i.videoChange)((async()=>{n.playerAgent.isAutoPlay()&&m(),t.addEventListener("play",m),t.addEventListener("ended",y)}))}))},displayName:"播放器位置动作",description:{"zh-CN":"设置当播放器移出视图的位置变化时执行的动作."},options:{triggerLocation:{defaultValue:p.Medium,displayName:"触发位置",dropdownEnum:p},pause:{defaultValue:!1,displayName:"自动暂停"},light:{defaultValue:!0,displayName:"自动开灯"}},commitHash:"3fed018af10aa7a5b4f4189da8f3d7936e6802e0",coreVersion:"2.8.8"});return t=t.component})()));