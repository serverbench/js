import ISiteSetup from './ISiteSetup.js';
import Vote from './Vote.js';
import './ISite.js';

declare class ListingSiteDisplay {
    readonly id: string;
    readonly index: number;
    readonly last: Vote | null;
    readonly next: Date | null;
    readonly primary: boolean;
    readonly secondary: boolean;
    readonly site: ISiteSetup;
    constructor(id: string, index: number, last: Vote | null, next: Date | null, primary: boolean, secondary: boolean, site: ISiteSetup);
    static fromObject(obj: any): ListingSiteDisplay;
}

export { ListingSiteDisplay as default };
