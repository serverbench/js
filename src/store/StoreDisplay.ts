import Member from "../Member.js";
import Serverbench from "../Serverbench.js";
import type ICountryCurrency from "./ICountryCurrency.js";
import type IStoreCategory from "./IStoreCategory.js";
import type IStoreCategorySet from "./IStoreCategorySet.js";

export default class StoreDisplay {

    public readonly categories: IStoreCategory[]
    public readonly sets: IStoreCategorySet[]
    public readonly currency: ICountryCurrency
    public readonly country: string | null
    public readonly member: Member | null

    constructor(categories: IStoreCategory[], sets: IStoreCategorySet[], currency: ICountryCurrency, country: string | null, member: Member | null) {
        this.categories = categories
        this.sets = sets
        this.currency = currency
        this.country = country
        this.member = member
    }

    public static fromObject(client: Serverbench, obj: any) {
        return new StoreDisplay(
            obj.categories as IStoreCategory[],
            obj.sets as IStoreCategorySet[],
            obj.currency as ICountryCurrency,
            obj.country,
            obj.member != null ? Member.fromObject(client, obj.member) : null
        )
    }

}