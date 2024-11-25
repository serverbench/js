interface Member {
    name: string;
    eid: string;
    id: string;
}

declare class Element {
    private readonly client;
    private dark;
    private background;
    private readonly path;
    private readonly args;
    constructor(client: Serverbench, path: string, args?: Record<string, string | string[]>, dark?: boolean, background?: boolean);
    setDark(dark: boolean): this;
    setBackground(background: boolean): this;
    mount(element: HTMLElement): Promise<this>;
}

interface ICountryCurrency {
    currency: string;
    digits: number;
    country: string | null;
}

interface ISkuPrice {
    id: string;
    amount: number;
    currency: ICountryCurrency;
    frequency: string | null;
}

interface IDiscount {
    id: string;
    amount: number | null;
    percentage: number | null;
    absolute: number;
    end: Date | null;
    price: ISkuPrice;
}

interface ISkuPerkUsage {
    id: string;
    name: string;
    amount: number | null;
}

interface ISku {
    id: string;
    index: number;
    name: string;
    type: string;
    perks: ISkuPerkUsage[];
    prices: ISkuPrice[];
    available: boolean;
    discounts: IDiscount[];
}

interface IStoreCategorySet {
    id: string;
    name: string;
}

interface IStoreCategory {
    id: string;
    name: string;
    skus: ISku[];
    sets: IStoreCategorySet[];
    policy: string | null;
}

interface IStore {
    categories: IStoreCategory[];
    sets: IStoreCategorySet[];
    currency: ICountryCurrency;
    country: string | null;
    member: Member | null;
}

declare class Store {
    private client;
    constructor(client: Serverbench);
    get(username?: string, eid?: string): Promise<IStore>;
    checkout(prices: ISkuPrice[], discounts: IDiscount[], member: Member): Element;
}

declare class Serverbench {
    clientId: string;
    clientSecret: string;
    test: boolean;
    private static instance;
    private constructor();
    static get(clientId: string, clientSecret: string, test?: boolean): Serverbench;
    get store(): Store;
    private fetch;
    get(realm: string, url: string): Promise<any>;
    post(realm: string, url: string, body?: any): Promise<any>;
}

export { Element, type ICountryCurrency, type IDiscount, type ISku, type ISkuPerkUsage, type ISkuPrice, type IStore, type IStoreCategory, type IStoreCategorySet, type Member, Store, Serverbench as default };
