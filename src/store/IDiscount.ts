import type ISkuPrice from "./ISkuPrice.js"

export default interface IDiscount {
    id: string
    amount: number | null
    percentage: number | null
    absolute: number
    end: Date | null
    price: ISkuPrice
}