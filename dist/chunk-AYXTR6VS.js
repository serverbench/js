import{a as o}from"./chunk-2KLRLXUE.js";var i=class{constructor(e){this.client=e}async get(e,r){return await this.client.post("community","/store/view",{username:e,eid:r})}checkout(e,r,c){return new o(this.client,"/community/checkout",{prices:e.map(t=>t.id).join(","),discounts:r.map(t=>t.id).join(","),member:c.id})}};export{i as a};
//# sourceMappingURL=chunk-AYXTR6VS.js.map