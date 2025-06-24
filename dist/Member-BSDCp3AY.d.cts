import IDiscount from './store/IDiscount.cjs';
import ISkuPrice from './store/ISkuPrice.cjs';
import ICountryCurrency from './store/ICountryCurrency.cjs';
import IStoreCategory from './store/IStoreCategory.cjs';
import IStoreCategorySet from './store/IStoreCategorySet.cjs';
import IListingSettings from './voting/IListingSettings.cjs';
import ListingSiteDisplay from './voting/ListingSiteDisplay.cjs';

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

declare class StoreDisplay {
    readonly categories: IStoreCategory[];
    readonly sets: IStoreCategorySet[];
    readonly currency: ICountryCurrency;
    readonly country: string | null;
    readonly member: Member | null;
    constructor(categories: IStoreCategory[], sets: IStoreCategorySet[], currency: ICountryCurrency, country: string | null, member: Member | null);
    static fromObject(client: Serverbench, obj: any): StoreDisplay;
}

declare class Store {
    private client;
    constructor(client: Serverbench);
    get(username?: string, eid?: string): Promise<StoreDisplay>;
    subscriptionCount(): Promise<any>;
    checkout(prices: ISkuPrice[] | string[], discounts: IDiscount[] | string[], member: Member | string, country: string | null): Element;
    billing(): Element;
}

declare class ListingDisplay {
    private readonly client;
    readonly id: string;
    readonly hash: string;
    readonly created: Date;
    readonly member: Member;
    readonly primaryCompleted: Date | null;
    readonly primaryNext: Date | null;
    readonly secondaryCompleted: Date | null;
    readonly secondaryNext: Date | null;
    readonly settings: IListingSettings;
    readonly sites: ListingSiteDisplay[];
    constructor(client: Serverbench, id: string, hash: string, created: Date, member: Member, primaryCompleted: Date | null, primaryNext: Date | null, secondaryCompleted: Date | null, secondaryNext: Date | null, settings: IListingSettings, sites: ListingSiteDisplay[]);
    static fromObject(serverbench: Serverbench, obj: any): ListingDisplay;
}

declare class Voting {
    private readonly client;
    constructor(client: Serverbench);
    subscribe(member: Member, callback?: (display: ListingDisplay | null, ban?: Date) => void): () => void;
}

declare class Serverbench {
    clientId: string;
    clientSecret: string;
    test: boolean;
    private static instance;
    private constructor();
    static get(clientId: string, clientSecret: string, test?: boolean): Serverbench;
    get store(): Store;
    get voting(): Voting;
    member(find: {
        username?: string;
        eid?: string;
    }): Promise<Member>;
    private fetch;
    private rid;
    socket(action: string, handleMessage?: (data: any) => void, ignoreClose?: boolean): {
        dispose: () => void;
        ws: WebSocket;
    };
    get(realm: string, url: string): Promise<any>;
    post(realm: string, url: string, body?: any): Promise<any>;
}

declare class Member {
    private readonly client;
    readonly name: string;
    readonly eid: string;
    readonly id: string;
    readonly voteBanned: Date | null;
    constructor(client: Serverbench, name: string, eid: string, id: string, voteBanned: Date | null);
    static fromObject(client: Serverbench, object: any): Member;
}

export { Element as E, ListingDisplay as L, Member as M, Serverbench as S, Voting as V, StoreDisplay as a, Store as b };
