import Element from "../element/Element.js";
import Member from "../Member.js";
import type Serverbench from "../Serverbench.js";
import IDiscount from "./IDiscount.js";
import ISkuPrice from "./ISkuPrice.js";
import type IStore from "./IStore.js";

export default class Store {

    private client: Serverbench

    constructor(client: Serverbench) {
        this.client = client
    }

    async get(username?: string, eid?: string) {
        return (await this.client.post('community', '/store/view', {
            username,
            eid
        })) as IStore
    }

    checkout(prices: ISkuPrice[] | string[], discounts: IDiscount[] | string[], member: Member | string) {
        const finalPrices = prices.map(price => typeof price === 'string' ? price : price.id)
        const finalDiscounts = discounts.map(discount => typeof discount === 'string' ? discount : discount.id)
        const finalMember = typeof member === 'string' ? member : member.id
        return new Element(
            this.client,
            '/community/checkout',
            {
                prices: finalPrices.join(','),
                discounts: finalDiscounts.join(','),
                member: finalMember
            }
        )
    }

    billing() {
        return new Element(this.client, '/billing')
    }

}