"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } }// node_modules/.pnpm/@open-iframe-resizer+core@1.2.1/node_modules/@open-iframe-resizer/core/dist/index.js
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
  } catch (e3) {
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
  const n = { ...v(), ...R(_nullishCoalesce(e, () => ( {}))) }, r = S(t), i = E(n, r);
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
    settings: { ...r },
    interactionState: { ...i },
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
  async mount(element) {
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
  }
};



exports.Element = Element;
//# sourceMappingURL=chunk-3J3HZGB4.cjs.map