var f=()=>typeof window<"u",p=()=>window.self!==window.top,g=e=>e instanceof HTMLIFrameElement,b=(e,t)=>{e.document.readyState==="complete"?t():e.addEventListener("load",t)},y=(e,t)=>{t(),e.addEventListener("load",t)},w=(e,t)=>{var n,r;let i=((n=e.contentWindow)==null?void 0:n.document.readyState)==="complete";return e.src!=="about:blank"&&((r=e.contentWindow)==null?void 0:r.location.href)!=="about:blank"&&i?t():e.addEventListener("load",t)},L=()=>({offsetSize:0,checkOrigin:!0,enableLegacyLibSupport:!1}),S=e=>{try{return new URL(e.src).origin===window.location.origin}catch{return!1}},E=e=>{try{let t=new URL(e.src).origin;if(t!=="about:blank")return t}catch{}return null},k=e=>(Object.keys(e).forEach(t=>e[t]===void 0&&delete e[t]),e),m=e=>{let{height:t}=e.documentElement.getBoundingClientRect();return Math.ceil(t)};function R(e){y(e,()=>{var t;return(t=e.contentWindow)==null?void 0:t.postMessage("[iFrameSizer]ID:0:false:false:32:true:true::auto:::0:false:child:auto:true:::true:::false","*")})}function z(e){if(typeof e.data=="string"&&e.data.startsWith("[iFrameSizer]")){let[t,n]=e.data.split(":"),r=+n;return r>0?r:null}return null}var d=f()?I():null,u=[],v=(e,t)=>{if(!f())return[];let n={...L(),...k(e??{})},r=H(t),i=O(n,r);return r.map(s=>{let o={iframe:s,settings:n,interactionState:{isHovered:!1}},c=M(o,i);return u.push(o),{unsubscribe:()=>{c(),u=u.filter(a=>a.iframe!==s)}}})};function H(e){return typeof e=="string"?Array.from(document.querySelectorAll(e)).filter(g):e?g(e)?[e]:[]:Array.from(document.getElementsByTagName("iframe"))}function O(e,t){if(Array.isArray(e.checkOrigin))return e.checkOrigin;if(!e.checkOrigin)return[];let n=[];for(let r of t){let i=E(r);i&&n.push(i)}return n}function M(e,t){let n=S(e.iframe)?A(e):D(e,t),r=B(e);return()=>{n(),r()}}function D(e,t){let{iframe:n,settings:r}=e,i=s=>{var o;let c=!r.checkOrigin||t.includes(s.origin);if(!(n.contentWindow!==s.source||!c)){if(((o=s.data)==null?void 0:o.type)==="iframe-resized"){let{height:a}=s.data;a&&l({newHeight:a,registeredElement:e});return}if(r.enableLegacyLibSupport){let a=z(s);a!==null&&l({newHeight:a,registeredElement:e});return}}};return window.addEventListener("message",i),r.enableLegacyLibSupport&&R(n),()=>window.removeEventListener("message",i)}function A({iframe:e}){let t=()=>{var n;let r=(n=e.contentDocument)==null?void 0:n.body;r&&d?.observe(r)};return w(e,t),()=>{var n;(n=e.contentDocument)!=null&&n.body&&d?.unobserve(e.contentDocument.body),e.removeEventListener("load",t)}}function B({iframe:e,interactionState:t}){let n=()=>{t.isHovered=!0},r=()=>{t.isHovered=!1};return e.addEventListener("mouseenter",n),e.addEventListener("mouseleave",r),()=>{e.removeEventListener("mouseenter",n),e.removeEventListener("mouseleave",r)}}function I(){let e=({target:t})=>{let n=u.find(s=>{var o;return((o=s.iframe.contentDocument)==null?void 0:o.body)===t});if(!n)return;let{iframe:r}=n;if(!r.contentDocument)return;let i=m(r.contentDocument);i&&l({newHeight:i,registeredElement:n})};return new ResizeObserver(t=>t.forEach(e))}function l({registeredElement:e,newHeight:t}){let{iframe:n,settings:r,interactionState:i}=e,s=n.getBoundingClientRect(),o=t+r.offsetSize;if(n.style.height=`${o}px`,!r.onIframeResize)return;let c={iframe:n,settings:{...r},interactionState:{...i},previousRenderState:{rect:s},nextRenderState:{rect:n.getBoundingClientRect()}};r.onIframeResize(c)}W();function W(){!f()||!p()||b(window,()=>{let e=()=>{let t={type:"iframe-resized",width:document.documentElement.scrollWidth,height:m(document)};window.parent.postMessage(t,"*")};new ResizeObserver(e).observe(document.body)})}var h=class{constructor(t,n,r={},i=!1,s=!1){this.eventListeners={};this.client=t,this.dark=i,this.background=s,this.path=n,this.args=r,window.addEventListener("message",this.handleMessage.bind(this))}setDark(t){return this.dark=t,this}setBackground(t){return this.background=t,this}async mount(t){let n=new URLSearchParams;n.set("clientId",this.client.clientId),n.set("clientSecret",this.client.clientSecret),n.set("origin",window.location.href),n.set("allow","payment"),this.client.test&&n.set("test","true"),this.dark&&n.set("dark","true"),this.background&&n.set("background","true");for(let s in this.args){let o=this.args[s];Array.isArray(o)?o.length>0&&n.set(s,o.join(",")):o!=null&&n.set(s,o)}t.innerHTML="";let r=document.createElement("iframe");r.src=`https://safe.serverbench.io${this.path}?${n.toString()}`,r.style.width="100%",r.style.height="0",r.style.border="none",r.style.overflowY="hidden",r.frameBorder="0";let i=t.appendChild(r);return v({checkOrigin:!0,enableLegacyLibSupport:!0},i),this}handleMessage(t){if(t.origin!=="https://safe.serverbench.io")return;let n=t.data;n.from==="serverbench"&&n.event&&this.triggerEvent(n.event)}triggerEvent(t){let n=this.eventListeners[t];n&&n.forEach(r=>r())}addEventListener(t,n){return this.eventListeners[t]||(this.eventListeners[t]=[]),this.eventListeners[t].push(n),this}};export{h as a};
//# sourceMappingURL=chunk-DV57NT7W.js.map