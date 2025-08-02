import ICountryCurrency from './ICountryCurrency.cjs';

interface ISkuPrice {
    id: string;
    amount: number;
    currency: ICountryCurrency;
    frequency: string | null;
    trialDays: number | null;
    cycles: number | null;
}

export type { ISkuPrice as default };
