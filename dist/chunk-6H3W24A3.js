import {
  Store
} from "./chunk-SPTRBXXV.js";

// src/Serverbench.ts
var _Serverbench = class _Serverbench {
  constructor(clientId, clientSecret, test) {
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.test = test;
  }
  static get(clientId, clientSecret, test = false) {
    if (!_Serverbench.instance || _Serverbench.instance.clientId !== clientId || _Serverbench.instance.clientSecret !== clientSecret || _Serverbench.instance.test !== test) {
      _Serverbench.instance = new _Serverbench(clientId, clientSecret, test);
    }
    return _Serverbench.instance;
  }
  get store() {
    return new Store(this);
  }
  async fetch(realm, url, body) {
    const domain = this.test ? "https://dev.serverbench.io" : "https://api.serverbench.io";
    const headers = new Headers({
      authorization: `ApiKey ${this.clientSecret}`
    });
    if (body) {
      headers.set("Content-Type", "application/json");
    }
    const response = await fetch(`${domain}/${realm}/${this.clientId}${url}`, {
      headers,
      method: body ? "POST" : "GET",
      body: body ? JSON.stringify(body) : void 0
    });
    return response.json();
  }
  async get(realm, url) {
    return this.fetch(realm, url);
  }
  async post(realm, url, body = {}) {
    return this.fetch(realm, url, body);
  }
};
_Serverbench.instance = null;
var Serverbench = _Serverbench;

export {
  Serverbench
};
//# sourceMappingURL=chunk-6H3W24A3.js.map