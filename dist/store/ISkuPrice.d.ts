import ICountryCurrency from './ICountryCurrency.js';

interface ISkuPrice {
    id: string;
    amount: number;
    currency: ICountryCurrency;
    frequency: string | null;
}

export type { ISkuPrice as default };
