import Member from '../Member.cjs';
import IListingSettings from './IListingSettings.cjs';
import IListingSiteDisplay from './IListingSiteDisplay.cjs';
import './IListingAmountSettings.cjs';
import './ISiteSetup.cjs';
import './ISite.cjs';
import './IVote.cjs';

interface IListingDisplay {
    id: string;
    hash: string;
    created: Date;
    member: Member;
    primaryCompleted: Date | null;
    primaryNext: Date | null;
    secondaryCompleted: Date | null;
    secondaryNext: Date | null;
    settings: IListingSettings;
    sites: IListingSiteDisplay[];
}

export type { IListingDisplay as default };
