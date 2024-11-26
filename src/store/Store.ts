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

    checkout(prices: ISkuPrice[], discounts: IDiscount[], member: Member) {
        return new Element(
            this.client,
            '/community/checkout',
            {
                prices: prices.map(price => price.id).join(','),
                discounts: discounts.map(discount => discount.id).join(','),
                member: member.id
            }
        )
    }

    billing() {
        return new Element(this.client, '/billing')
    }

}