import ISku from './ISku.js';
import IStoreCategory from './IStoreCategory.js';
import './IDiscount.js';
import './ISkuPrice.js';
import './ICountryCurrency.js';
import './ISkuPerkUsage.js';
import './IStoreCategorySet.js';

declare enum UpsellType {
    UPGRADE = "upgrade",
    CROSS_SELL = "crossSell",
    INCREASE_AMOUNT = "increaseAmount"
}
interface IUpsell {
    type: UpsellType;
    for: ISku[];
    offer: IStoreCategory[];
}

export { UpsellType, type IUpsell as default };
