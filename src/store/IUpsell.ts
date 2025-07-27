import ISku from "./ISku.js"
import IStoreCategory from "./IStoreCategory.js"

export enum UpsellType {
    UPGRADE = 'upgrade',
    CROSS_SELL = 'crossSell',
    INCREASE_AMOUNT = 'increaseAmount',
}

export default interface IUpsell {
    type: UpsellType
    for: ISku[]
    offer: IStoreCategory[]
}