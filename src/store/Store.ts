import Element from "../element/Element.js";
import Member from "../Member.js";
import type Serverbench from "../Serverbench.js";
import IDiscount from "./IDiscount.js";
import ISkuPrice from "./ISkuPrice.js";
import StoreDisplay from "./StoreDisplay.js";

export default class Store {

    private client: Serverbench

    constructor(client: Serverbench) {
        this.client = client
    }

    async get(username?: string, eid?: string) {
        return StoreDisplay.fromObject(this.client, await this.client.post('community', '/store/view', {
            username,
            eid
        }))
    }

    async subscriptionCount() {
        const { count } = await this.client.get('community', '/subscription/count')
        return count
    }

    checkout(prices: ISkuPrice[] | string[], discounts: IDiscount[] | string[], member: Member | string, country: string | null) {
        const finalPrices = prices.map(price => typeof price === 'string' ? price : price.id)
        const finalDiscounts = discounts.map(discount => typeof discount === 'string' ? discount : discount.id)
        const finalMember = typeof member === 'string' ? member : member.id
        return new Element(
            this.client,
            '/community/checkout',
            {
                prices: finalPrices.join(','),
                discounts: finalDiscounts.join(','),
                member: finalMember,
                country: country ?? undefined
            }
        )
    }

    async getCheckout(prices: ISkuPrice[] | string[], discounts: IDiscount[] | string[], member: Member | string, email: string, country: string | null = null) {
        const finalPrices = prices.map(price => typeof price === 'string' ? price : price.id)
        const finalDiscounts = discounts.map(discount => typeof discount === 'string' ? discount : discount.id)
        const finalMember = typeof member === 'string' ? member : member.id
        const checkout = await this.client.post('community', '/store/checkout', {
            prices: finalPrices,
            discounts: finalDiscounts,
            member: finalMember,
            email,
            country: country ?? undefined
        })
        return checkout
    }

    async claimCheckout(token: string) {
        const req = await fetch(`${this.client.domain}/checkout/claim`, {
            headers: {
                authorization: `Bearer ${token}`
            },
            method: 'POST'
        })
        if (req.status != 200 && req.status != 201) {
            throw new Error(`Error claiming checkout: ${req.statusText}`)
        }
    }

    billing() {
        return new Element(this.client, '/billing')
    }

}