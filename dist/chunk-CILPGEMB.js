import{a as u}from"./chunk-6SPGJSJJ.js";import{a as m}from"./chunk-FBXWZXGY.js";import{a as h}from"./chunk-TQVGB5FK.js";var i=class i{constructor(t,e,n){this.clientId=t,this.clientSecret=e,this.test=n}static get(t,e,n=!1){return(!i.instance||i.instance.clientId!==t||i.instance.clientSecret!==e||i.instance.test!==n)&&(i.instance=new i(t,e,n)),i.instance}get store(){return new m(this)}get voting(){return new u(this)}async member(t){return h.fromObject(this,await this.post("community","/member/search",t))}async fetch(t,e,n){let o=this.test?"https://dev.serverbench.io":"https://api.beta.serverbench.io",s=new Headers({authorization:`ApiKey ${this.clientSecret}`});return n&&s.set("Content-Type","application/json"),(await fetch(`${o}/${t}/${this.clientId}${e}`,{headers:s,method:n?"POST":"GET",body:n?JSON.stringify(n):void 0})).json()}socket(t,e=o=>{},n=!1){let o=this.test?"ws://localhost:3030":"wss://stream.beta.serverbench.io",s=new WebSocket(`${o}?${new URLSearchParams({key:this.clientSecret})}`),a=0;return s.onopen=()=>{a=0,s.send(JSON.stringify({action:`community.${this.clientId}.${t}`}))},s.onmessage=p=>{let r=JSON.parse(p.data);if(r.result)e(r.result);else{let c=[r.realm];r.realm=="community"&&c.push(this.clientId),c.push(r.action),s.send(JSON.stringify({action:c.join(".")}))}},n||(s.onclose=()=>{a++,setTimeout(()=>{s=this.socket(t,e,!0).ws},Math.min(1e3*a*5,30*1e3))}),{dispose:()=>{s.onclose=null,s.close()},ws:s}}async get(t,e){return this.fetch(t,e)}async post(t,e,n={}){return this.fetch(t,e,n)}};i.instance=null;var l=i;export{l as a};
//# sourceMappingURL=chunk-CILPGEMB.js.map