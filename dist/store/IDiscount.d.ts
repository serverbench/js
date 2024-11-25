import ISkuPrice from './ISkuPrice.js';
import './ICountryCurrency.js';

interface IDiscount {
    id: string;
    amount: number | null;
    percentage: number | null;
    absolute: number;
    end: Date | null;
    price: ISkuPrice;
}

export type { IDiscount as default };
