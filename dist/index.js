var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// node_modules/.pnpm/@open-iframe-resizer+core@1.2.1/node_modules/@open-iframe-resizer/core/dist/index.js
var g = () => typeof window < "u";
var L = () => window.self !== window.top;
var m = (e) => e instanceof HTMLIFrameElement;
var w = (e, t) => {
  e.document.readyState === "complete" ? t() : e.addEventListener("load", t);
};
var y = (e, t) => {
  t(), e.addEventListener("load", t);
};
var p = (e, t) => {
  var i, o;
  const n = ((i = e.contentWindow) == null ? void 0 : i.document.readyState) === "complete";
  return e.src !== "about:blank" && ((o = e.contentWindow) == null ? void 0 : o.location.href) !== "about:blank" && n ? t() : e.addEventListener("load", t);
};
var v = () => ({ offsetSize: 0, checkOrigin: true, enableLegacyLibSupport: false });
var b = (e) => {
  try {
    return new URL(e.src).origin === window.location.origin;
  } catch (e2) {
    return false;
  }
};
var I = (e) => {
  try {
    const t = new URL(e.src).origin;
    if (t !== "about:blank")
      return t;
  } catch (e2) {
  }
  return null;
};
var R = (e) => (Object.keys(e).forEach((t) => e[t] === void 0 && delete e[t]), e);
var h = (e) => {
  const { height: t } = e.documentElement.getBoundingClientRect();
  return Math.ceil(t);
};
function z(e) {
  y(
    e,
    () => {
      var t;
      return (t = e.contentWindow) == null ? void 0 : t.postMessage("[iFrameSizer]ID:0:false:false:32:true:true::auto:::0:false:child:auto:true:::true:::false", "*");
    }
  );
}
function O(e) {
  if (typeof e.data == "string" && e.data.startsWith("[iFrameSizer]")) {
    const [t, n] = e.data.split(":"), r = +n;
    return r > 0 ? r : null;
  }
  return null;
}
var a = g() ? M() : null;
var l = [];
var D = (e, t) => {
  if (!g())
    return [];
  const n = __spreadValues(__spreadValues({}, v()), R(e != null ? e : {})), r = S(t), i = E(n, r);
  return r.map((o) => {
    const s = { iframe: o, settings: n, interactionState: { isHovered: false } }, d = C(s, i);
    return l.push(s), {
      unsubscribe: () => {
        d(), l = l.filter((u) => u.iframe !== o);
      }
    };
  });
};
function S(e) {
  return typeof e == "string" ? Array.from(document.querySelectorAll(e)).filter(m) : e ? m(e) ? [e] : [] : Array.from(document.getElementsByTagName("iframe"));
}
function E(e, t) {
  if (Array.isArray(e.checkOrigin))
    return e.checkOrigin;
  if (!e.checkOrigin)
    return [];
  const n = [];
  for (const r of t) {
    const i = I(r);
    i && n.push(i);
  }
  return n;
}
function C(e, t) {
  const n = b(e.iframe) ? B(e) : k(e, t), r = H(e);
  return () => {
    n(), r();
  };
}
function k(e, t) {
  const { iframe: n, settings: r } = e, i = (o) => {
    var u;
    const s = !r.checkOrigin || t.includes(o.origin);
    if (!(!(n.contentWindow === o.source) || !s)) {
      if (((u = o.data) == null ? void 0 : u.type) === "iframe-resized") {
        const { height: c } = o.data;
        c && f({ newHeight: c, registeredElement: e });
        return;
      }
      if (r.enableLegacyLibSupport) {
        const c = O(o);
        c !== null && f({ newHeight: c, registeredElement: e });
        return;
      }
    }
  };
  return window.addEventListener("message", i), r.enableLegacyLibSupport && z(n), () => window.removeEventListener("message", i);
}
function B({ iframe: e }) {
  const t = () => {
    var r;
    const n = (r = e.contentDocument) == null ? void 0 : r.body;
    n && (a == null || a.observe(n));
  };
  return p(e, t), () => {
    var n;
    (n = e.contentDocument) != null && n.body && (a == null || a.unobserve(e.contentDocument.body)), e.removeEventListener("load", t);
  };
}
function H({ iframe: e, interactionState: t }) {
  const n = () => {
    t.isHovered = true;
  }, r = () => {
    t.isHovered = false;
  };
  return e.addEventListener("mouseenter", n), e.addEventListener("mouseleave", r), () => {
    e.removeEventListener("mouseenter", n), e.removeEventListener("mouseleave", r);
  };
}
function M() {
  const e = ({ target: t }) => {
    const n = l.find((o) => {
      var s;
      return ((s = o.iframe.contentDocument) == null ? void 0 : s.body) === t;
    });
    if (!n)
      return;
    const { iframe: r } = n;
    if (!r.contentDocument)
      return;
    const i = h(r.contentDocument);
    i && f({ newHeight: i, registeredElement: n });
  };
  return new ResizeObserver((t) => t.forEach(e));
}
function f({ registeredElement: e, newHeight: t }) {
  const { iframe: n, settings: r, interactionState: i } = e, o = n.getBoundingClientRect(), s = t + r.offsetSize;
  if (n.style.height = `${s}px`, !r.onIframeResize)
    return;
  const d = {
    iframe: n,
    settings: __spreadValues({}, r),
    interactionState: __spreadValues({}, i),
    previousRenderState: { rect: o },
    nextRenderState: { rect: n.getBoundingClientRect() }
  };
  r.onIframeResize(d);
}
W();
function W() {
  !g() || !L() || w(window, () => {
    const e = () => {
      const n = {
        type: "iframe-resized",
        width: document.documentElement.scrollWidth,
        height: h(document)
      };
      window.parent.postMessage(n, "*");
    };
    new ResizeObserver(e).observe(document.body);
  });
}

// src/element/Element.ts
var Element = class {
  constructor(client, path, args = {}, dark = false, background = false) {
    this.client = client;
    this.dark = dark;
    this.background = background;
    this.path = path;
    this.args = args;
  }
  setDark(dark) {
    this.dark = dark;
    return this;
  }
  setBackground(background) {
    this.background = background;
    return this;
  }
  mount(element) {
    return __async(this, null, function* () {
      const queryParams = new URLSearchParams();
      queryParams.set("clientId", this.client.clientId);
      queryParams.set("clientSecret", this.client.clientSecret);
      if (this.dark) queryParams.set("dark", "true");
      if (this.background) queryParams.set("background", "true");
      for (const key in this.args) {
        const value = this.args[key];
        if (Array.isArray(value)) {
          queryParams.set(key, value.join(","));
        } else {
          queryParams.set(key, value);
        }
      }
      const iframe = document.createElement("iframe");
      iframe.src = `https://safe.serverbench.io${this.path}?${queryParams.toString()}`;
      iframe.style.width = "100%";
      const appended = element.appendChild(iframe);
      D({}, appended);
      return this;
    });
  }
};

// src/store/Store.ts
var Store = class {
  constructor(client) {
    this.client = client;
  }
  get(username, eid) {
    return __async(this, null, function* () {
      return yield this.client.post("community", "/store/view", {
        username,
        eid
      });
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
  fetch(realm, url, body) {
    return __async(this, null, function* () {
      const domain = this.test ? "https://dev.serverbench.io" : "https://api.serverbench.io";
      const headers = new Headers({
        authorization: `ApiKey ${this.clientSecret}`
      });
      if (body) {
        headers.set("Content-Type", "application/json");
      }
      const response = yield fetch(`${domain}/${realm}/${this.clientId}${url}`, {
        headers,
        method: body ? "POST" : "GET",
        body: body ? JSON.stringify(body) : void 0
      });
      return response.json();
    });
  }
  get(realm, url) {
    return __async(this, null, function* () {
      return this.fetch(realm, url);
    });
  }
  post(_0, _1) {
    return __async(this, arguments, function* (realm, url, body = {}) {
      return this.fetch(realm, url, body);
    });
  }
};
_Serverbench.instance = null;
var Serverbench = _Serverbench;

// src/index.ts
var src_default = Serverbench;
export {
  Element,
  Store,
  src_default as default
};
//# sourceMappingURL=index.js.map