import{_ as j,n as N,q as D,i as M,E as H}from"./core.min-CSTc2bBl.js";var P={};(function(f){(()=>{var C={25:()=>{(function(){function c(i){var o=i.__resizeTriggers__,s=o.firstElementChild,d=o.lastElementChild,u=s.firstElementChild;d.scrollLeft=d.scrollWidth,d.scrollTop=d.scrollHeight,u.style.width=s.offsetWidth+1+"px",u.style.height=s.offsetHeight+1+"px",s.scrollLeft=s.scrollWidth,s.scrollTop=s.scrollHeight}function m(i){var o=this;c(this),this.__resizeRAF__&&z(this.__resizeRAF__),this.__resizeRAF__=h(function(){(function(s){return s.offsetWidth!=s.__resizeLast__.width||s.offsetHeight!=s.__resizeLast__.height})(o)&&(o.__resizeLast__.width=o.offsetWidth,o.__resizeLast__.height=o.offsetHeight,o.__resizeListeners__.forEach(function(s){s.call(o,i)}))})}var l=document.attachEvent,y=!1;if(!l){var h=function(){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(o){return window.setTimeout(o,20)};return function(o){return i(o)}}(),z=function(){var i=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.clearTimeout;return function(o){return i(o)}}(),w=!1,b="",v="animationstart",p="Webkit Moz O ms".split(" "),O="webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "),t=document.createElement("fakeelement");if(t.style.animationName!==void 0&&(w=!0),w===!1){for(var e=0;e<p.length;e++)if(t.style[p[e]+"AnimationName"]!==void 0){b="-"+p[e].toLowerCase()+"-",v=O[e],w=!0;break}}var n="resizeanim",r="@"+b+"keyframes "+n+" { from { opacity: 0; } to { opacity: 0; } } ",a=b+"animation: 1ms "+n+"; "}window.addResizeListener=function(i,o){l?i.attachEvent("onresize",o):(i.__resizeTriggers__||(getComputedStyle(i).position=="static"&&(i.style.position="relative"),function(){if(!y){var s=(r||"")+".resize-triggers { "+(a||"")+'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',d=document.head||document.getElementsByTagName("head")[0],u=document.createElement("style");u.type="text/css",u.styleSheet?u.styleSheet.cssText=s:u.appendChild(document.createTextNode(s)),d.appendChild(u),y=!0}}(),i.__resizeLast__={},i.__resizeListeners__=[],(i.__resizeTriggers__=document.createElement("div")).className="resize-triggers",i.__resizeTriggers__.innerHTML='<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>',i.appendChild(i.__resizeTriggers__),c(i),i.addEventListener("scroll",m,!0),v&&i.__resizeTriggers__.addEventListener(v,function(s){s.animationName==n&&c(i)})),i.__resizeListeners__.push(o))},window.removeResizeListener=function(i,o){l?i.detachEvent("onresize",o):(i.__resizeListeners__.splice(i.__resizeListeners__.indexOf(o),1),i.__resizeListeners__.length||(i.removeEventListener("scroll",m),i.__resizeTriggers__=!i.removeChild(i.__resizeTriggers__)))}})()}},E={};function _(c){var m=E[c];if(m!==void 0)return m.exports;var l=E[c]={exports:{}};return C[c](l,l.exports,_),l.exports}_.d=(c,m)=>{for(var l in m)_.o(m,l)&&!_.o(c,l)&&Object.defineProperty(c,l,{enumerable:!0,get:m[l]})},_.o=(c,m)=>Object.prototype.hasOwnProperty.call(c,m),_.r=c=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(c,"__esModule",{value:!0})};var g={};(()=>{_.r(g),_.d(g,{getConfig:()=>z,getPayload:()=>h,isReady:()=>O,setFullScreen:()=>t,startupScript:()=>v}),_(25);var c=function(){var e=window.location.search;if(!e)return{};var n={};return e.slice(1).split("&").forEach(function(r,a){var i=r.split("=");n[i[0]]=i[1]}),n};function m(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,a)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?m(Object(r),!0).forEach(function(a){y(e,a,r[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))})}return e}function y(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}var h=function(){return window.MODULE_CONFIG},z=function(){return h()},w=function(e){window.parent&&window.parent.postMessage(e,"*")},b=function(e){var n=document.body.offsetWidth,r=document.body.offsetHeight>2?document.body.offsetHeight:0;window.isFullscreen||w({sentinel:"em-ad-content",type:"resize",handshakeId:e,height:r,width:n})},v=function(e){var n,r,a;n="html{position:static;width:auto;height:auto}body{margin:0;padding:0;padding-top:1px;margin-top:-1px;padding-bottom:1px;margin-bottom:-1px;-ms-overflow-style:none;scrollbar-width:none;overflow:hidden;}body::-webkit-scrollbar{display:none;}",r=document.getElementsByTagName("head")[0],(a=document.createElement("style")).setAttribute("type","text/css"),a.styleSheet?a.styleSheet.cssText=n:a.appendChild(document.createTextNode(n)),r.appendChild(a);var i=c().id||"";return window.addResizeListener(document.body,function(){return b(i)}),b(i),p(e)||(w({sentinel:"em-ad-content",type:"handshake-request",handshakeId:i}),window.addEventListener("message",function(o){var s=o.data;s.sentinel==="em-adnetify"&&s.type==="handshake-response"&&function(d){var u=l(l({},window.MODULE_CONFIG||{}),d);u.__fragment&&delete u.__fragment,window.MODULE_CONFIG=u}(s.payload||null)}),!1)},p=function(e){(function(r){if(r==null)throw new TypeError("Cannot destructure undefined")})(e);var n=h();return!(!n||n.__fragment)&&n},O=function(e){if(typeof window<"u"){var n,r,a,i=Object.assign({},{timeout:1e6},e),o=v(i);return new Promise(o?function(s){return s(o)}:(n=function(){return p(i)},r=i.timeout,a=Date.now(),function s(d,u){var T=n();T?d(T):r&&Date.now()-a>=r?u(new Error("timeout")):setTimeout(s.bind(void 0,d,u),30)}))}},t=function(){var e=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];if(typeof window<"u"){var n=c(),r=n.id||"";window.isFullscreen=e,w({sentinel:"em-ad-content",type:e?"enter-full-screen":"exit-full-screen",handshakeId:r})}}})();var L=f;for(var q in g)L[q]=g[q];g.__esModule&&Object.defineProperty(L,"__esModule",{value:!0})})()})(P);((f,C)=>{const E="__q_context__",_=window,g=new Set,L=t=>f.querySelectorAll(t),q=(t,e,n=e.type)=>{L("[on"+t+"\\:"+n+"]").forEach(r=>y(r,t,e,n))},c=(t,e)=>t.getAttribute(e),m=t=>{if(t._qwikjson_===void 0){let e=(t===f.documentElement?f.body:t).lastElementChild;for(;e;){if(e.tagName==="SCRIPT"&&c(e,"type")==="qwik/json"){t._qwikjson_=JSON.parse(e.textContent.replace(/\\x3C(\/?script)/gi,"<$1"));break}e=e.previousElementSibling}}},l=(t,e)=>new CustomEvent(t,{detail:e}),y=async(t,e,n,r=n.type)=>{const a="on"+e+":"+r;t.hasAttribute("preventdefault:"+r)&&n.preventDefault();const i=t._qc_,o=i==null?void 0:i.li.filter(d=>d[0]===a);if(o&&o.length>0){for(const d of o)await d[1].getFn([t,n],()=>t.isConnected)(n,t);return}const s=c(t,a);if(s){const d=t.closest("[q\\:container]"),u=new URL(c(d,"q:base"),f.baseURI);for(const T of s.split(`
`)){const k=new URL(T,u),A=k.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",F=performance.now();let S;const x=T.startsWith("#");if(x)S=(d.qFuncs||[])[Number.parseInt(A)];else{const I=j(()=>import(k.href.split("#")[0]),__vite__mapDeps([]),import.meta.url);m(d),S=(await I)[A]}const R=f[E];if(t.isConnected)try{f[E]=[t,n,k],x||h("qsymbol",{symbol:A,element:t,reqTime:F}),await S(n,t)}finally{f[E]=R}}}},h=(t,e)=>{f.dispatchEvent(l(t,e))},z=t=>t.replace(/([A-Z])/g,e=>"-"+e.toLowerCase()),w=async t=>{let e=z(t.type),n=t.target;for(q("-document",t,e);n&&n.getAttribute;)await y(n,"",t,e),n=t.bubbles&&t.cancelBubble!==!0?n.parentElement:null},b=t=>{q("-window",t,z(t.type))},v=()=>{var t;const e=f.readyState;if(!C&&(e=="interactive"||e=="complete")&&(C=1,h("qinit"),((t=_.requestIdleCallback)!=null?t:_.setTimeout).bind(_)(()=>h("qidle")),g.has("qvisible"))){const n=L("[on\\:qvisible]"),r=new IntersectionObserver(a=>{for(const i of a)i.isIntersecting&&(r.unobserve(i.target),y(i.target,"",l("qvisible",i)))});n.forEach(a=>r.observe(a))}},p=(t,e,n,r=!1)=>t.addEventListener(e,n,{capture:r,passive:!1}),O=t=>{for(const e of t)g.has(e)||(p(f,e,w,!0),p(_,e,b),g.add(e))};if(!f.qR){const t=_.qwikevents;Array.isArray(t)&&O(t),_.qwikevents={push:(...e)=>O(e)},p(f,"readystatechange",v),v()}})(document);const W=N(D(()=>j(()=>import("./entry_App-CAOvH_0g.js"),__vite__mapDeps([]),import.meta.url),"s_XX7nik39eIY"));P.isReady().then(async f=>{M(document.getElementById("app"),H(W,{payload:f},3,"nq_0"))});
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}