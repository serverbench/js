"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _chunkIYHGO6SAcjs = require('./chunk-IYHGO6SA.cjs');var _chunkSR2YAYG2cjs = require('./chunk-SR2YAYG2.cjs');var _chunkZHOZDMQPcjs = require('./chunk-ZHOZDMQP.cjs');var i=class i{constructor(t,e,s){this.clientId=t,this.clientSecret=e,this.test=s}static get(t,e,s=!1){return(!i.instance||i.instance.clientId!==t||i.instance.clientSecret!==e||i.instance.test!==s)&&(i.instance=new i(t,e,s)),i.instance}get store(){return new (0, _chunkIYHGO6SAcjs.a)(this)}get voting(){return new (0, _chunkSR2YAYG2cjs.a)(this)}async member(t){return _chunkZHOZDMQPcjs.a.fromObject(this,await this.post("community","/member/search",t))}async fetch(t,e,s){let o=this.test?"https://dev.serverbench.io":"https://api.beta.serverbench.io",n=new Headers({authorization:`ApiKey ${this.clientSecret}`});s&&n.set("Content-Type","application/json");let r=await fetch(`${o}/${t}/${this.clientId}${e}`,{headers:n,method:s?"POST":"GET",body:s?JSON.stringify(s):void 0});if(r.status<200||r.status>=300)throw new Error(r.statusText);return r.json()}socket(t,e=o=>{},s=!1){let o=this.test?"ws://localhost:3030":"wss://stream.beta.serverbench.io",n=new WebSocket(`${o}?${new URLSearchParams({key:this.clientSecret})}`),r=0;return n.onopen=()=>{r=0,n.send(JSON.stringify({action:`community.${this.clientId}.${t}`}))},n.onmessage=g=>{let a=JSON.parse(g.data);if(a.result!=null&&(Array.isArray(a.result)&&a.result.length||Object.keys(a.result).length>0))e(a.result);else{let c=[a.realm];a.realm=="community"&&c.push(this.clientId),c.push(a.action),n.send(JSON.stringify({action:c.join(".")}))}},s||(n.onclose=()=>{r++,setTimeout(()=>{n=this.socket(t,e,!0).ws},Math.min(1e3*r*5,30*1e3))}),{dispose:()=>{n.onclose=null,n.close()},ws:n}}async get(t,e){return this.fetch(t,e)}async post(t,e,s={}){return this.fetch(t,e,s)}};i.instance=null;var l=i;exports.a = l;
//# sourceMappingURL=chunk-FAWR3UIN.cjs.map