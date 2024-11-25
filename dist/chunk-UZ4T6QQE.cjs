"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk3J3HZGB4cjs = require('./chunk-3J3HZGB4.cjs');

// src/store/Store.ts
var Store = class {
  constructor(client) {
    this.client = client;
  }
  async get(username, eid) {
    return await this.client.post("community", "/store/view", {
      username,
      eid
    });
  }
  checkout(prices, discounts, member) {
    return new (0, _chunk3J3HZGB4cjs.Element)(
      this.client,
      "/community/checkout",
      {
        prices: prices.map((price) => price.id).join(","),
        discounts: discounts.map((discount) => discount.id).join(","),
        member: member.id
      }
    );
  }
};



exports.Store = Store;
//# sourceMappingURL=chunk-UZ4T6QQE.cjs.map