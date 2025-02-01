import ISiteSetup from './ISiteSetup.js';
import IVote from './IVote.js';
import './ISite.js';

interface IListingSiteDisplay {
    id: string;
    index: number;
    last: IVote | null;
    next: Date | null;
    primary: boolean;
    secondary: boolean;
    site: ISiteSetup;
}

export type { IListingSiteDisplay as default };
