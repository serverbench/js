var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define("Member", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("element/Element", ["require", "exports", "../../node_modules/@open-iframe-resizer/core/dist/index"], function (require, exports, index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    index_1 = __importDefault(index_1);
    class Element {
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
            return __awaiter(this, void 0, void 0, function* () {
                const queryParams = new URLSearchParams();
                queryParams.set('clientId', this.client.clientId);
                queryParams.set('clientSecret', this.client.clientSecret);
                if (this.dark)
                    queryParams.set('dark', 'true');
                if (this.background)
                    queryParams.set('background', 'true');
                for (const key in this.args) {
                    const value = this.args[key];
                    if (Array.isArray(value)) {
                        queryParams.set(key, value.join(','));
                    }
                    else {
                        queryParams.set(key, value);
                    }
                }
                const iframe = document.createElement('iframe');
                iframe.src = `https://safe.serverbench.io${this.path}?${queryParams.toString()}`;
                iframe.style.width = '100%';
                const appended = element.appendChild(iframe);
                index_1.default.initialize({}, appended);
                return this;
            });
        }
    }
    exports.default = Element;
});
define("store/ICountryCurrency", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("store/ISkuPrice", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("store/IDiscount", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("store/ISkuPerkUsage", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("store/ISku", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("store/IStoreCategorySet", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("store/IStoreCategory", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("store/IStore", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("store/Store", ["require", "exports", "element/Element"], function (require, exports, Element_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Element_1 = __importDefault(Element_1);
    class Store {
        constructor(client) {
            this.client = client;
        }
        get(username, eid) {
            return __awaiter(this, void 0, void 0, function* () {
                return (yield this.client.post('community', '/store/view', {
                    username,
                    eid
                }));
            });
        }
        checkout(prices, discounts, member) {
            return new Element_1.default(this.client, '/community/checkout', {
                prices: prices.map(price => price.id).join(','),
                discounts: discounts.map(discount => discount.id).join(','),
                member: member.id
            });
        }
    }
    exports.default = Store;
});
define("Serverbench", ["require", "exports", "store/Store"], function (require, exports, Store_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Store_1 = __importDefault(Store_1);
    class Serverbench {
        constructor(clientId, clientSecret, test) {
            this.clientId = clientId;
            this.clientSecret = clientSecret;
            this.test = test;
        }
        static get(clientId, clientSecret, test = false) {
            if (!Serverbench.instance || Serverbench.instance.clientId !== clientId || Serverbench.instance.clientSecret !== clientSecret || Serverbench.instance.test !== test) {
                Serverbench.instance = new Serverbench(clientId, clientSecret, test);
            }
            return Serverbench.instance;
        }
        get store() {
            return new Store_1.default(this);
        }
        fetch(realm, url, body) {
            return __awaiter(this, void 0, void 0, function* () {
                const domain = this.test ? 'https://dev.serverbench.io' : 'https://api.serverbench.io';
                const headers = new Headers({
                    authorization: `ApiKey ${this.clientSecret}`,
                });
                if (body) {
                    headers.set('Content-Type', 'application/json');
                }
                const response = yield fetch(`${domain}/${realm}/${this.clientId}${url}`, {
                    headers,
                    method: body ? 'POST' : 'GET',
                    body: body ? JSON.stringify(body) : undefined
                });
                return response.json();
            });
        }
        get(realm, url) {
            return __awaiter(this, void 0, void 0, function* () {
                return this.fetch(realm, url);
            });
        }
        post(realm_1, url_1) {
            return __awaiter(this, arguments, void 0, function* (realm, url, body = {}) {
                return this.fetch(realm, url, body);
            });
        }
    }
    Serverbench.instance = null;
    exports.default = Serverbench;
});
//# sourceMappingURL=serverbench.js.map