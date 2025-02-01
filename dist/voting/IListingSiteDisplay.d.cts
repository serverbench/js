import ISiteSetup from './ISiteSetup.cjs';
import IVote from './IVote.cjs';
import './ISite.cjs';

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
