import IDiscount from './IDiscount.js';
import ISkuPerkUsage from './ISkuPerkUsage.js';
import ISkuPrice from './ISkuPrice.js';
import './ICountryCurrency.js';

interface ISku {
    id: string;
    index: number;
    name: string;
    type: string;
    perks: ISkuPerkUsage[];
    prices: ISkuPrice[];
    available: boolean;
    discounts: IDiscount[];
}

export type { ISku as default };
