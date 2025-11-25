import type IDiscount from "./IDiscount.js";
import type ISkuPerkUsage from "./ISkuPerkUsage.js";
import type ISkuPrice from "./ISkuPrice.js";

export default interface ISku {

    id: string
    index: number
    name: string
    type: string
    perks: ISkuPerkUsage[]
    prices: ISkuPrice[]
    available: boolean
    discounts: IDiscount[]
    enabled: boolean

}