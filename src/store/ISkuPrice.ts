import type ICountryCurrency from "./ICountryCurrency.js"

export default interface ISkuPrice {

    id: string
    amount: number
    currency: ICountryCurrency
    frequency: string | null
    trialDays: number | null
    cycles: number | null

}