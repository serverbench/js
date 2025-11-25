import IDiscount from './IDiscount.cjs';
import ISkuPerkUsage from './ISkuPerkUsage.cjs';
import ISkuPrice from './ISkuPrice.cjs';
import './ICountryCurrency.cjs';

interface ISku {
    id: string;
    index: number;
    name: string;
    type: string;
    perks: ISkuPerkUsage[];
    prices: ISkuPrice[];
    available: boolean;
    discounts: IDiscount[];
    enabled: boolean;
}

export type { ISku as default };
