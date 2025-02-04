import Member from './Member.cjs';
import IListingSettings from './voting/IListingSettings.cjs';
import ListingSiteDisplay from './voting/ListingSiteDisplay.cjs';
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
    subscribe(callback?: (display: ListingDisplay) => void): () => void;
}

declare class Voting {
    private readonly client;
    constructor(client: Serverbench);
    get(username: string | null, eid: string | null): Promise<ListingDisplay>;
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
    private fetch;
    socket(action: string, handleMessage?: (data: any) => void, ignoreClose?: boolean): {
        dispose: () => void;
        ws: WebSocket;
    };
    get(realm: string, url: string): Promise<any>;
    post(realm: string, url: string, body?: any): Promise<any>;
}

export { Element as E, ListingDisplay as L, Serverbench as S, Voting as V, Store as a };
