import Member from './Member.js';
import IDiscount from './store/IDiscount.js';
import ISkuPrice from './store/ISkuPrice.js';
import IStore from './store/IStore.js';

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

export { Element as E, Store as S, Serverbench as a };
