"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _chunkWZO43EOBcjs = require('./chunk-WZO43EOB.cjs');var i=class{constructor(e){this.client=e}subscribe(e,t=s=>{}){let{ws:s,dispose:c}=this.client.socket(`listing.display.${e.id}`,l=>{t(_chunkWZO43EOBcjs.a.fromObject(this.client,l))});return c}};exports.a = i;
//# sourceMappingURL=chunk-KMP6EAOJ.cjs.map