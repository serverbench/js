import Member from '../Member.js';
import ICountryCurrency from './ICountryCurrency.js';
import IStoreCategory from './IStoreCategory.js';
import IStoreCategorySet from './IStoreCategorySet.js';
import './ISku.js';
import './IDiscount.js';
import './ISkuPrice.js';
import './ISkuPerkUsage.js';

interface IStore {
    categories: IStoreCategory[];
    sets: IStoreCategorySet[];
    currency: ICountryCurrency;
    country: string | null;
    member: Member | null;
}

export type { IStore as default };
