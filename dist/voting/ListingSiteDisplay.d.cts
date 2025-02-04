import ISiteSetup from './ISiteSetup.cjs';
import Vote from './Vote.cjs';
import './ISite.cjs';

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
