"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _chunkA4KS2P2Ocjs = require('./chunk-A4KS2P2O.cjs');var i=class{constructor(e){this.client=e}async get(e,r){return await this.client.post("community","/store/view",{username:e,eid:r})}checkout(e,r,c){return new (0, _chunkA4KS2P2Ocjs.a)(this.client,"/community/checkout",{prices:e.map(t=>t.id).join(","),discounts:r.map(t=>t.id).join(","),member:c.id})}};exports.a = i;
//# sourceMappingURL=chunk-EC7FTDAI.cjs.map