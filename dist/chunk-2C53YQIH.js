import{a}from"./chunk-ANI3Y3QJ.js";var s=class s{constructor(e,n,t){this.clientId=e,this.clientSecret=n,this.test=t}static get(e,n,t=!1){return(!s.instance||s.instance.clientId!==e||s.instance.clientSecret!==n||s.instance.test!==t)&&(s.instance=new s(e,n,t)),s.instance}get store(){return new a(this)}async fetch(e,n,t){let c=this.test?"https://dev.serverbench.io":"https://api.beta.serverbench.io",r=new Headers({authorization:`ApiKey ${this.clientSecret}`});return t&&r.set("Content-Type","application/json"),(await fetch(`${c}/${e}/${this.clientId}${n}`,{headers:r,method:t?"POST":"GET",body:t?JSON.stringify(t):void 0})).json()}async get(e,n){return this.fetch(e,n)}async post(e,n,t={}){return this.fetch(e,n,t)}};s.instance=null;var i=s;export{i as a};
//# sourceMappingURL=chunk-2C53YQIH.js.map