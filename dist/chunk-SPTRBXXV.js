import {
  Element
} from "./chunk-LTCU7F4C.js";

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
    return new Element(
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

export {
  Store
};
//# sourceMappingURL=chunk-SPTRBXXV.js.map