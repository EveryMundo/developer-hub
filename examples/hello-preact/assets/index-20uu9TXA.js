(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))_(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&_(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function _(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();var he={};(function(t){(()=>{var e={25:()=>{(function(){function s(f){var g=f.__resizeTriggers__,h=g.firstElementChild,z=g.lastElementChild,C=h.firstElementChild;z.scrollLeft=z.scrollWidth,z.scrollTop=z.scrollHeight,C.style.width=h.offsetWidth+1+"px",C.style.height=h.offsetHeight+1+"px",h.scrollLeft=h.scrollWidth,h.scrollTop=h.scrollHeight}function l(f){var g=this;s(this),this.__resizeRAF__&&y(this.__resizeRAF__),this.__resizeRAF__=i(function(){(function(h){return h.offsetWidth!=h.__resizeLast__.width||h.offsetHeight!=h.__resizeLast__.height})(g)&&(g.__resizeLast__.width=g.offsetWidth,g.__resizeLast__.height=g.offsetHeight,g.__resizeListeners__.forEach(function(h){h.call(g,f)}))})}var c=document.attachEvent,p=!1;if(!c){var i=function(){var f=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(g){return window.setTimeout(g,20)};return function(g){return f(g)}}(),y=function(){var f=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.clearTimeout;return function(g){return f(g)}}(),u=!1,k="",S="animationstart",E="Webkit Moz O ms".split(" "),b="webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "),L=document.createElement("fakeelement");if(L.style.animationName!==void 0&&(u=!0),u===!1){for(var d=0;d<E.length;d++)if(L.style[E[d]+"AnimationName"]!==void 0){k="-"+E[d].toLowerCase()+"-",S=b[d],u=!0;break}}var v="resizeanim",m="@"+k+"keyframes "+v+" { from { opacity: 0; } to { opacity: 0; } } ",x=k+"animation: 1ms "+v+"; "}window.addResizeListener=function(f,g){c?f.attachEvent("onresize",g):(f.__resizeTriggers__||(getComputedStyle(f).position=="static"&&(f.style.position="relative"),function(){if(!p){var h=(m||"")+".resize-triggers { "+(x||"")+'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',z=document.head||document.getElementsByTagName("head")[0],C=document.createElement("style");C.type="text/css",C.styleSheet?C.styleSheet.cssText=h:C.appendChild(document.createTextNode(h)),z.appendChild(C),p=!0}}(),f.__resizeLast__={},f.__resizeListeners__=[],(f.__resizeTriggers__=document.createElement("div")).className="resize-triggers",f.__resizeTriggers__.innerHTML='<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>',f.appendChild(f.__resizeTriggers__),s(f),f.addEventListener("scroll",l,!0),S&&f.__resizeTriggers__.addEventListener(S,function(h){h.animationName==v&&s(f)})),f.__resizeListeners__.push(g))},window.removeResizeListener=function(f,g){c?f.detachEvent("onresize",g):(f.__resizeListeners__.splice(f.__resizeListeners__.indexOf(g),1),f.__resizeListeners__.length||(f.removeEventListener("scroll",l),f.__resizeTriggers__=!f.removeChild(f.__resizeTriggers__)))}})()}},n={};function _(s){var l=n[s];if(l!==void 0)return l.exports;var c=n[s]={exports:{}};return e[s](c,c.exports,_),c.exports}_.d=(s,l)=>{for(var c in l)_.o(l,c)&&!_.o(s,c)&&Object.defineProperty(s,c,{enumerable:!0,get:l[c]})},_.o=(s,l)=>Object.prototype.hasOwnProperty.call(s,l),_.r=s=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})};var r={};(()=>{_.r(r),_.d(r,{getConfig:()=>y,getPayload:()=>i,isReady:()=>b,setFullScreen:()=>L,startupScript:()=>S}),_(25);var s=function(){var d=window.location.search;if(!d)return{};var v={};return d.slice(1).split("&").forEach(function(m,x){var f=m.split("=");v[f[0]]=f[1]}),v};function l(d,v){var m=Object.keys(d);if(Object.getOwnPropertySymbols){var x=Object.getOwnPropertySymbols(d);v&&(x=x.filter(function(f){return Object.getOwnPropertyDescriptor(d,f).enumerable})),m.push.apply(m,x)}return m}function c(d){for(var v=1;v<arguments.length;v++){var m=arguments[v]!=null?arguments[v]:{};v%2?l(Object(m),!0).forEach(function(x){p(d,x,m[x])}):Object.getOwnPropertyDescriptors?Object.defineProperties(d,Object.getOwnPropertyDescriptors(m)):l(Object(m)).forEach(function(x){Object.defineProperty(d,x,Object.getOwnPropertyDescriptor(m,x))})}return d}function p(d,v,m){return v in d?Object.defineProperty(d,v,{value:m,enumerable:!0,configurable:!0,writable:!0}):d[v]=m,d}var i=function(){return window.MODULE_CONFIG},y=function(){return i()},u=function(d){window.parent&&window.parent.postMessage(d,"*")},k=function(d){var v=document.body.offsetWidth,m=document.body.offsetHeight>2?document.body.offsetHeight:0;window.isFullscreen||u({sentinel:"em-ad-content",type:"resize",handshakeId:d,height:m,width:v})},S=function(d){var v,m,x;v="html{position:static;width:auto;height:auto}body{margin:0;padding:0;padding-top:1px;margin-top:-1px;padding-bottom:1px;margin-bottom:-1px;-ms-overflow-style:none;scrollbar-width:none;overflow:hidden;}body::-webkit-scrollbar{display:none;}",m=document.getElementsByTagName("head")[0],(x=document.createElement("style")).setAttribute("type","text/css"),x.styleSheet?x.styleSheet.cssText=v:x.appendChild(document.createTextNode(v)),m.appendChild(x);var f=s().id||"";return window.addResizeListener(document.body,function(){return k(f)}),k(f),E(d)||(u({sentinel:"em-ad-content",type:"handshake-request",handshakeId:f}),window.addEventListener("message",function(g){var h=g.data;h.sentinel==="em-adnetify"&&h.type==="handshake-response"&&function(z){var C=c(c({},window.MODULE_CONFIG||{}),z);C.__fragment&&delete C.__fragment,window.MODULE_CONFIG=C}(h.payload||null)}),!1)},E=function(d){(function(m){if(m==null)throw new TypeError("Cannot destructure undefined")})(d);var v=i();return!(!v||v.__fragment)&&v},b=function(d){if(typeof window<"u"){var v,m,x,f=Object.assign({},{timeout:1e6},d),g=S(f);return new Promise(g?function(h){return h(g)}:(v=function(){return E(f)},m=f.timeout,x=Date.now(),function h(z,C){var te=v();te?z(te):m&&Date.now()-x>=m?C(new Error("timeout")):setTimeout(h.bind(void 0,z,C),30)}))}},L=function(){var d=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];if(typeof window<"u"){var v=s(),m=v.id||"";window.isFullscreen=d,u({sentinel:"em-ad-content",type:d?"enter-full-screen":"exit-full-screen",handshakeId:m})}}})();var o=t;for(var a in r)o[a]=r[a];r.__esModule&&Object.defineProperty(o,"__esModule",{value:!0})})()})(he);var I,w,ve,N,ne,me,B,A={},J=[],xe=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Q=Array.isArray;function F(t,e){for(var n in e)t[n]=e[n];return t}function ge(t){var e=t.parentNode;e&&e.removeChild(t)}function Le(t,e,n){var _,r,o,a={};for(o in e)o=="key"?_=e[o]:o=="ref"?r=e[o]:a[o]=e[o];if(arguments.length>2&&(a.children=arguments.length>3?I.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(o in t.defaultProps)a[o]===void 0&&(a[o]=t.defaultProps[o]);return D(t,a,_,r,null)}function D(t,e,n,_,r){var o={type:t,props:e,key:n,ref:_,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:r??++ve,__i:-1,__u:0};return r==null&&w.vnode!=null&&w.vnode(o),o}function $(t){return t.children}function j(t,e){this.props=t,this.context=e}function H(t,e){if(e==null)return t.__?H(t.__,t.__i+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?H(t):null}function Oe(t,e,n){var _,r=t.__v,o=r.__e,a=t.__P;if(a)return(_=F({},r)).__v=r.__v+1,w.vnode&&w.vnode(_),X(a,_,r,t.__n,a.ownerSVGElement!==void 0,32&r.__u?[o]:null,e,o??H(r),!!(32&r.__u),n),_.__v=r.__v,_.__.__k[_.__i]=_,_.__d=void 0,_.__e!=o&&ye(_),_}function ye(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return ye(t)}}function _e(t){(!t.__d&&(t.__d=!0)&&N.push(t)&&!W.__r++||ne!==w.debounceRendering)&&((ne=w.debounceRendering)||me)(W)}function W(){var t,e,n,_=[],r=[];for(N.sort(B);t=N.shift();)t.__d&&(n=N.length,e=Oe(t,_,r)||e,n===0||N.length>n?(V(_,e,r),r.length=_.length=0,e=void 0,N.sort(B)):e&&w.__c&&w.__c(e,J));e&&V(_,e,r),W.__r=0}function we(t,e,n,_,r,o,a,s,l,c,p){var i,y,u,k,S,E=_&&_.__k||J,b=e.length;for(n.__d=l,Pe(n,e,E),l=n.__d,i=0;i<b;i++)(u=n.__k[i])!=null&&typeof u!="boolean"&&typeof u!="function"&&(y=u.__i===-1?A:E[u.__i]||A,u.__i=i,X(t,u,y,r,o,a,s,l,c,p),k=u.__e,u.ref&&y.ref!=u.ref&&(y.ref&&ee(y.ref,null,u),p.push(u.ref,u.__c||k,u)),S==null&&k!=null&&(S=k),65536&u.__u||y.__k===u.__k?l=be(u,l,t):typeof u.type=="function"&&u.__d!==void 0?l=u.__d:k&&(l=k.nextSibling),u.__d=void 0,u.__u&=-196609);n.__d=l,n.__e=S}function Pe(t,e,n){var _,r,o,a,s,l=e.length,c=n.length,p=c,i=0;for(t.__k=[],_=0;_<l;_++)a=_+i,(r=t.__k[_]=(r=e[_])==null||typeof r=="boolean"||typeof r=="function"?null:typeof r=="string"||typeof r=="number"||typeof r=="bigint"||r.constructor==String?D(null,r,null,null,null):Q(r)?D($,{children:r},null,null,null):r.constructor===void 0&&r.__b>0?D(r.type,r.props,r.key,r.ref?r.ref:null,r.__v):r)!=null?(r.__=t,r.__b=t.__b+1,s=Se(r,n,a,p),r.__i=s,o=null,s!==-1&&(p--,(o=n[s])&&(o.__u|=131072)),o==null||o.__v===null?(s==-1&&i--,typeof r.type!="function"&&(r.__u|=65536)):s!==a&&(s===a+1?i++:s>a?p>l-a?i+=s-a:i--:s<a?s==a-1&&(i=s-a):i=0,s!==_+i&&(r.__u|=65536))):(o=n[a])&&o.key==null&&o.__e&&!(131072&o.__u)&&(o.__e==t.__d&&(t.__d=H(o)),G(o,o,!1),n[a]=null,p--);if(p)for(_=0;_<c;_++)(o=n[_])!=null&&!(131072&o.__u)&&(o.__e==t.__d&&(t.__d=H(o)),G(o,o))}function be(t,e,n){var _,r;if(typeof t.type=="function"){for(_=t.__k,r=0;_&&r<_.length;r++)_[r]&&(_[r].__=t,e=be(_[r],e,n));return e}t.__e!=e&&(n.insertBefore(t.__e,e||null),e=t.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType===8);return e}function Se(t,e,n,_){var r=t.key,o=t.type,a=n-1,s=n+1,l=e[n];if(l===null||l&&r==l.key&&o===l.type&&!(131072&l.__u))return n;if(_>(l!=null&&!(131072&l.__u)?1:0))for(;a>=0||s<e.length;){if(a>=0){if((l=e[a])&&!(131072&l.__u)&&r==l.key&&o===l.type)return a;a--}if(s<e.length){if((l=e[s])&&!(131072&l.__u)&&r==l.key&&o===l.type)return s;s++}}return-1}function re(t,e,n){e[0]==="-"?t.setProperty(e,n??""):t[e]=n==null?"":typeof n!="number"||xe.test(e)?n:n+"px"}function M(t,e,n,_,r){var o;e:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof _=="string"&&(t.style.cssText=_=""),_)for(e in _)n&&e in n||re(t.style,e,"");if(n)for(e in n)_&&n[e]===_[e]||re(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")o=e!==(e=e.replace(/(PointerCapture)$|Capture$/i,"$1")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+o]=n,n?_?n.u=_.u:(n.u=Date.now(),t.addEventListener(e,o?ie:oe,o)):t.removeEventListener(e,o?ie:oe,o);else{if(r)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="width"&&e!=="height"&&e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e!=="rowSpan"&&e!=="colSpan"&&e!=="role"&&e in t)try{t[e]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&e[4]!=="-"?t.removeAttribute(e):t.setAttribute(e,n))}}function oe(t){if(this.l){var e=this.l[t.type+!1];if(t.t){if(t.t<=e.u)return}else t.t=Date.now();return e(w.event?w.event(t):t)}}function ie(t){if(this.l)return this.l[t.type+!0](w.event?w.event(t):t)}function X(t,e,n,_,r,o,a,s,l,c){var p,i,y,u,k,S,E,b,L,d,v,m,x,f,g,h=e.type;if(e.constructor!==void 0)return null;128&n.__u&&(l=!!(32&n.__u),o=[s=e.__e=n.__e]),(p=w.__b)&&p(e);e:if(typeof h=="function")try{if(b=e.props,L=(p=h.contextType)&&_[p.__c],d=p?L?L.props.value:p.__:_,n.__c?E=(i=e.__c=n.__c).__=i.__E:("prototype"in h&&h.prototype.render?e.__c=i=new h(b,d):(e.__c=i=new j(b,d),i.constructor=h,i.render=Ce),L&&L.sub(i),i.props=b,i.state||(i.state={}),i.context=d,i.__n=_,y=i.__d=!0,i.__h=[],i._sb=[]),i.__s==null&&(i.__s=i.state),h.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=F({},i.__s)),F(i.__s,h.getDerivedStateFromProps(b,i.__s))),u=i.props,k=i.state,i.__v=e,y)h.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(h.getDerivedStateFromProps==null&&b!==u&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(b,d),!i.__e&&(i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(b,i.__s,d)===!1||e.__v===n.__v)){for(e.__v!==n.__v&&(i.props=b,i.state=i.__s,i.__d=!1),e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(z){z&&(z.__=e)}),v=0;v<i._sb.length;v++)i.__h.push(i._sb[v]);i._sb=[],i.__h.length&&a.push(i);break e}i.componentWillUpdate!=null&&i.componentWillUpdate(b,i.__s,d),i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(u,k,S)})}if(i.context=d,i.props=b,i.__P=t,i.__e=!1,m=w.__r,x=0,"prototype"in h&&h.prototype.render){for(i.state=i.__s,i.__d=!1,m&&m(e),p=i.render(i.props,i.state,i.context),f=0;f<i._sb.length;f++)i.__h.push(i._sb[f]);i._sb=[]}else do i.__d=!1,m&&m(e),p=i.render(i.props,i.state,i.context),i.state=i.__s;while(i.__d&&++x<25);i.state=i.__s,i.getChildContext!=null&&(_=F(F({},_),i.getChildContext())),y||i.getSnapshotBeforeUpdate==null||(S=i.getSnapshotBeforeUpdate(u,k)),we(t,Q(g=p!=null&&p.type===$&&p.key==null?p.props.children:p)?g:[g],e,n,_,r,o,a,s,l,c),i.base=e.__e,e.__u&=-161,i.__h.length&&a.push(i),E&&(i.__E=i.__=null)}catch(z){e.__v=null,l||o!=null?(e.__e=s,e.__u|=l?160:32,o[o.indexOf(s)]=null):(e.__e=n.__e,e.__k=n.__k),w.__e(z,e,n)}else o==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=ze(n.__e,e,n,_,r,o,a,l,c);(p=w.diffed)&&p(e)}function V(t,e,n){for(var _=0;_<n.length;_++)ee(n[_],n[++_],n[++_]);w.__c&&w.__c(e,t),t.some(function(r){try{t=r.__h,r.__h=[],t.some(function(o){o.call(r)})}catch(o){w.__e(o,r.__v)}})}function ze(t,e,n,_,r,o,a,s,l){var c,p,i,y,u,k,S,E=n.props,b=e.props,L=e.type;if(L==="svg"&&(r=!0),o!=null){for(c=0;c<o.length;c++)if((u=o[c])&&"setAttribute"in u==!!L&&(L?u.localName===L:u.nodeType===3)){t=u,o[c]=null;break}}if(t==null){if(L===null)return document.createTextNode(b);t=r?document.createElementNS("http://www.w3.org/2000/svg",L):document.createElement(L,b.is&&b),o=null,s=!1}if(L===null)E===b||s&&t.data===b||(t.data=b);else{if(o=o&&I.call(t.childNodes),E=n.props||A,!s&&o!=null)for(E={},c=0;c<t.attributes.length;c++)E[(u=t.attributes[c]).name]=u.value;for(c in E)u=E[c],c=="children"||(c=="dangerouslySetInnerHTML"?i=u:c==="key"||c in b||M(t,c,null,u,r));for(c in b)u=b[c],c=="children"?y=u:c=="dangerouslySetInnerHTML"?p=u:c=="value"?k=u:c=="checked"?S=u:c==="key"||s&&typeof u!="function"||E[c]===u||M(t,c,u,E[c],r);if(p)s||i&&(p.__html===i.__html||p.__html===t.innerHTML)||(t.innerHTML=p.__html),e.__k=[];else if(i&&(t.innerHTML=""),we(t,Q(y)?y:[y],e,n,_,r&&L!=="foreignObject",o,a,o?o[0]:n.__k&&H(n,0),s,l),o!=null)for(c=o.length;c--;)o[c]!=null&&ge(o[c]);s||(c="value",k!==void 0&&(k!==t[c]||L==="progress"&&!k||L==="option"&&k!==E[c])&&M(t,c,k,E[c],!1),c="checked",S!==void 0&&S!==t[c]&&M(t,c,S,E[c],!1))}return t}function ee(t,e,n){try{typeof t=="function"?t(e):t.current=e}catch(_){w.__e(_,n)}}function G(t,e,n){var _,r;if(w.unmount&&w.unmount(t),(_=t.ref)&&(_.current&&_.current!==t.__e||ee(_,null,e)),(_=t.__c)!=null){if(_.componentWillUnmount)try{_.componentWillUnmount()}catch(o){w.__e(o,e)}_.base=_.__P=null,t.__c=void 0}if(_=t.__k)for(r=0;r<_.length;r++)_[r]&&G(_[r],e,n||typeof t.type!="function");n||t.__e==null||ge(t.__e),t.__=t.__e=t.__d=void 0}function Ce(t,e,n){return this.constructor(t,n)}function Te(t,e,n){var _,r,o,a;w.__&&w.__(t,e),r=(_=typeof n=="function")?null:n&&n.__k||e.__k,o=[],a=[],X(e,t=(!_&&n||e).__k=Le($,null,[t]),r||A,A,e.ownerSVGElement!==void 0,!_&&n?[n]:r?null:e.firstChild?I.call(e.childNodes):null,o,!_&&n?n:r?r.__e:e.firstChild,_,a),t.__d=void 0,V(o,t,a)}I=J.slice,w={__e:function(t,e,n,_){for(var r,o,a;e=e.__;)if((r=e.__c)&&!r.__)try{if((o=r.constructor)&&o.getDerivedStateFromError!=null&&(r.setState(o.getDerivedStateFromError(t)),a=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(t,_||{}),a=r.__d),a)return r.__E=r}catch(s){t=s}throw t}},ve=0,j.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=F({},this.state),typeof t=="function"&&(t=t(F({},n),this.props)),t&&F(n,t),t!=null&&this.__v&&(e&&this._sb.push(e),_e(this))},j.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),_e(this))},j.prototype.render=$,N=[],me=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,B=function(t,e){return t.__v.__b-e.__v.__b},W.__r=0;var Z,O,q,se,K=0,ke=[],U=[],P=w,ce=P.__b,le=P.__r,ae=P.diffed,ue=P.__c,fe=P.unmount,de=P.__;function Fe(t,e){P.__h&&P.__h(O,t,K||e),K=0;var n=O.__H||(O.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({__V:U}),n.__[t]}function Ne(t){return K=1,He(Ee,t)}function He(t,e,n){var _=Fe(Z++,2);if(_.t=t,!_.__c&&(_.__=[n?n(e):Ee(void 0,e),function(s){var l=_.__N?_.__N[0]:_.__[0],c=_.t(l,s);l!==c&&(_.__N=[c,_.__[1]],_.__c.setState({}))}],_.__c=O,!O.u)){var r=function(s,l,c){if(!_.__c.__H)return!0;var p=_.__c.__H.__.filter(function(y){return!!y.__c});if(p.every(function(y){return!y.__N}))return!o||o.call(this,s,l,c);var i=!1;return p.forEach(function(y){if(y.__N){var u=y.__[0];y.__=y.__N,y.__N=void 0,u!==y.__[0]&&(i=!0)}}),!(!i&&_.__c.props===s)&&(!o||o.call(this,s,l,c))};O.u=!0;var o=O.shouldComponentUpdate,a=O.componentWillUpdate;O.componentWillUpdate=function(s,l,c){if(this.__e){var p=o;o=void 0,r(s,l,c),o=p}a&&a.call(this,s,l,c)},O.shouldComponentUpdate=r}return _.__N||_.__}function Ae(){for(var t;t=ke.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(R),t.__H.__h.forEach(Y),t.__H.__h=[]}catch(e){t.__H.__h=[],P.__e(e,t.__v)}}P.__b=function(t){O=null,ce&&ce(t)},P.__=function(t,e){t&&e.__k&&e.__k.__m&&(t.__m=e.__k.__m),de&&de(t,e)},P.__r=function(t){le&&le(t),Z=0;var e=(O=t.__c).__H;e&&(q===O?(e.__h=[],O.__h=[],e.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=U,n.__N=n.i=void 0})):(e.__h.forEach(R),e.__h.forEach(Y),e.__h=[],Z=0)),q=O},P.diffed=function(t){ae&&ae(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(ke.push(e)!==1&&se===P.requestAnimationFrame||((se=P.requestAnimationFrame)||$e)(Ae)),e.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==U&&(n.__=n.__V),n.i=void 0,n.__V=U})),q=O=null},P.__c=function(t,e){e.some(function(n){try{n.__h.forEach(R),n.__h=n.__h.filter(function(_){return!_.__||Y(_)})}catch(_){e.some(function(r){r.__h&&(r.__h=[])}),e=[],P.__e(_,n.__v)}}),ue&&ue(t,e)},P.unmount=function(t){fe&&fe(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach(function(_){try{R(_)}catch(r){e=r}}),n.__H=void 0,e&&P.__e(e,n.__v))};var pe=typeof requestAnimationFrame=="function";function $e(t){var e,n=function(){clearTimeout(_),pe&&cancelAnimationFrame(e),setTimeout(t)},_=setTimeout(n,100);pe&&(e=requestAnimationFrame(n))}function R(t){var e=O,n=t.__c;typeof n=="function"&&(t.__c=void 0,n()),O=e}function Y(t){var e=O;t.__c=t.__(),O=e}function Ee(t,e){return typeof e=="function"?e(t):e}const Me="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='27.68'%20height='32'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20296'%3e%3cpath%20fill='%23673AB8'%20d='m128%200l128%2073.9v147.8l-128%2073.9L0%20221.7V73.9z'%3e%3c/path%3e%3cpath%20fill='%23FFF'%20d='M34.865%20220.478c17.016%2021.78%2071.095%205.185%20122.15-34.704c51.055-39.888%2080.24-88.345%2063.224-110.126c-17.017-21.78-71.095-5.184-122.15%2034.704c-51.055%2039.89-80.24%2088.346-63.224%20110.126Zm7.27-5.68c-5.644-7.222-3.178-21.402%207.573-39.253c11.322-18.797%2030.541-39.548%2054.06-57.923c23.52-18.375%2048.303-32.004%2069.281-38.442c19.922-6.113%2034.277-5.075%2039.92%202.148c5.644%207.223%203.178%2021.403-7.573%2039.254c-11.322%2018.797-30.541%2039.547-54.06%2057.923c-23.52%2018.375-48.304%2032.004-69.281%2038.441c-19.922%206.114-34.277%205.076-39.92-2.147Z'%3e%3c/path%3e%3cpath%20fill='%23FFF'%20d='M220.239%20220.478c17.017-21.78-12.169-70.237-63.224-110.126C105.96%2070.464%2051.88%2053.868%2034.865%2075.648c-17.017%2021.78%2012.169%2070.238%2063.224%20110.126c51.055%2039.889%20105.133%2056.485%20122.15%2034.704Zm-7.27-5.68c-5.643%207.224-19.998%208.262-39.92%202.148c-20.978-6.437-45.761-20.066-69.28-38.441c-23.52-18.376-42.74-39.126-54.06-57.923c-10.752-17.851-13.218-32.03-7.575-39.254c5.644-7.223%2019.999-8.261%2039.92-2.148c20.978%206.438%2045.762%2020.067%2069.281%2038.442c23.52%2018.375%2042.739%2039.126%2054.06%2057.923c10.752%2017.85%2013.218%2032.03%207.574%2039.254Z'%3e%3c/path%3e%3cpath%20fill='%23FFF'%20d='M127.552%20167.667c10.827%200%2019.603-8.777%2019.603-19.604c0-10.826-8.776-19.603-19.603-19.603c-10.827%200-19.604%208.777-19.604%2019.603c0%2010.827%208.777%2019.604%2019.604%2019.604Z'%3e%3c/path%3e%3c/svg%3e",De=""+new URL("../vite.svg",import.meta.url).href;var je=0;function T(t,e,n,_,r,o){var a,s,l={};for(s in e)s=="ref"?a=e[s]:l[s]=e[s];var c={type:t,props:l,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--je,__i:-1,__u:0,__source:r,__self:o};if(typeof t=="function"&&(a=t.defaultProps))for(s in a)l[s]===void 0&&(l[s]=a[s]);return w.vnode&&w.vnode(c),c}function Ue({payload:t={}}){var s,l;const{settings:e,styles:n,i18n:_}=t,r=(e==null?void 0:e.title)||"No title";_!=null&&_.labels["example-label-key"],(l=(s=n==null?void 0:n.value)==null?void 0:s.colors)!=null&&l.primary;const[o,a]=Ne(0);return T($,{children:[T("div",{children:[T("a",{href:"https://vitejs.dev",target:"_blank",children:T("img",{src:De,class:"logo",alt:"Vite logo"})}),T("a",{href:"https://preactjs.com",target:"_blank",children:T("img",{src:Me,class:"logo preact",alt:"Preact logo"})})]}),T("h1",{children:r}),T("div",{class:"card",children:[T("button",{onClick:()=>a(c=>c+1),children:["count is ",o]}),T("p",{children:["Edit ",T("code",{children:"src/app.jsx"})," and save to test HMR"]})]}),T("p",{class:"read-the-docs",children:"Click on the Vite and Preact logos to learn more"})]})}he.isReady().then(async t=>{Te(T(Ue,{payload:t}),document.getElementById("app"))});