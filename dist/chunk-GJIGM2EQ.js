import{a as i}from"./chunk-2KLRLXUE.js";var n=class{constructor(e){this.client=e}async get(e,r){return await this.client.post("community","/store/view",{username:e,eid:r})}checkout(e,r,o){return new i(this.client,"/community/checkout",{prices:e.map(t=>t.id).join(","),discounts:r.map(t=>t.id).join(","),member:o.id})}billing(){return new i(this.client,"/billing")}};export{n as a};
//# sourceMappingURL=chunk-GJIGM2EQ.js.map