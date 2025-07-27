import ISku from './ISku.cjs';
import IStoreCategory from './IStoreCategory.cjs';
import './IDiscount.cjs';
import './ISkuPrice.cjs';
import './ICountryCurrency.cjs';
import './ISkuPerkUsage.cjs';
import './IStoreCategorySet.cjs';

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
