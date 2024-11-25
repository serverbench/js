import ISku from './ISku.js';
import IStoreCategorySet from './IStoreCategorySet.js';
import './IDiscount.js';
import './ISkuPrice.js';
import './ICountryCurrency.js';
import './ISkuPerkUsage.js';

interface IStoreCategory {
    id: string;
    name: string;
    skus: ISku[];
    sets: IStoreCategorySet[];
    policy: string | null;
}

export type { IStoreCategory as default };
