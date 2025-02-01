import Member from '../Member.js';
import IListingSettings from './IListingSettings.js';
import IListingSiteDisplay from './IListingSiteDisplay.js';
import './IListingAmountSettings.js';
import './ISiteSetup.js';
import './ISite.js';
import './IVote.js';

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
