import ISkuPrice from './ISkuPrice.cjs';
import './ICountryCurrency.cjs';

interface IDiscount {
    id: string;
    amount: number | null;
    percentage: number | null;
    absolute: number;
    end: Date | null;
    price: ISkuPrice;
}

export type { IDiscount as default };
