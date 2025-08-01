import ICountryCurrency from './ICountryCurrency.js';

interface ISkuPrice {
    id: string;
    amount: number;
    currency: ICountryCurrency;
    frequency: string | null;
    trialDays: number | null;
}

export type { ISkuPrice as default };
