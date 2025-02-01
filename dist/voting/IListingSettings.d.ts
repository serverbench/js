import IListingAmountSettings from './IListingAmountSettings.js';

interface IListingSettings {
    primary: IListingAmountSettings;
    secondary: IListingAmountSettings;
    lookAhead: number;
}

export type { IListingSettings as default };
