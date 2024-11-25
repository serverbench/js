import Member from '../Member.cjs';
import ICountryCurrency from './ICountryCurrency.cjs';
import IStoreCategory from './IStoreCategory.cjs';
import IStoreCategorySet from './IStoreCategorySet.cjs';
import './ISku.cjs';
import './IDiscount.cjs';
import './ISkuPrice.cjs';
import './ISkuPerkUsage.cjs';

interface IStore {
    categories: IStoreCategory[];
    sets: IStoreCategorySet[];
    currency: ICountryCurrency;
    country: string | null;
    member: Member | null;
}

export type { IStore as default };
