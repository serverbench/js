import ISiteSetup from "./ISiteSetup.js"
import Vote from "./Vote.js"

export default class ListingSiteDisplay {
    public readonly id: string
    public readonly index: number
    public readonly last: Vote | null
    public readonly next: Date | null
    public readonly primary: boolean
    public readonly secondary: boolean
    public readonly site: ISiteSetup

    constructor(id: string, index: number, last: Vote | null, next: Date | null, primary: boolean, secondary: boolean, site: ISiteSetup) {
        this.id = id
        this.index = index
        this.last = last
        this.next = next
        this.primary = primary
        this.secondary = secondary
        this.site = site
    }

    public static fromObject(obj: any) {
        return new ListingSiteDisplay(
            obj.id,
            obj.index,
            obj.last ? Vote.fromObject(obj.last) : null,
            obj.next ? new Date(obj.next) : null,
            obj.primary,
            obj.secondary,
            obj.site as ISiteSetup
        )
    }
}