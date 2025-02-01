import IListingAmountSettings from './IListingAmountSettings.cjs';

interface IListingSettings {
    primary: IListingAmountSettings;
    secondary: IListingAmountSettings;
    lookAhead: number;
}

export type { IListingSettings as default };
