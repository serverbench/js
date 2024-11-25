import type Member from "../Member.js";
import type ICountryCurrency from "./ICountryCurrency.js";
import type IStoreCategory from "./IStoreCategory.js";
import type IStoreCategorySet from "./IStoreCategorySet.js";

export default interface IStore {

    categories: IStoreCategory[]
    sets: IStoreCategorySet[]
    currency: ICountryCurrency
    country: string | null
    member: Member | null

}