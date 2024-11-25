import ISku from './ISku.cjs';
import IStoreCategorySet from './IStoreCategorySet.cjs';
import './IDiscount.cjs';
import './ISkuPrice.cjs';
import './ICountryCurrency.cjs';
import './ISkuPerkUsage.cjs';

interface IStoreCategory {
    id: string;
    name: string;
    skus: ISku[];
    sets: IStoreCategorySet[];
    policy: string | null;
}

export type { IStoreCategory as default };
