import Member from './Member.cjs';
import IDiscount from './store/IDiscount.cjs';
import ISkuPrice from './store/ISkuPrice.cjs';
import IStore from './store/IStore.cjs';

declare class Element {
    private readonly client;
    private dark;
    private background;
    private readonly path;
    private readonly args;
    private eventListeners;
    constructor(client: Serverbench, path: string, args?: Record<string, string | string[] | undefined>, dark?: boolean, background?: boolean);
    setDark(dark: boolean): this;
    setBackground(background: boolean): this;
    mount(element: HTMLElement): Promise<this>;
    private handleMessage;
    private triggerEvent;
    addEventListener(eventName: string, callback: Function): this;
}

declare class Store {
    private client;
    constructor(client: Serverbench);
    get(username?: string, eid?: string): Promise<IStore>;
    checkout(prices: ISkuPrice[] | string[], discounts: IDiscount[] | string[], member: Member | string, country: string | null): Element;
    billing(): Element;
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

export { Element as E, Serverbench as S, Store as a };
