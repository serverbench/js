import Member from "../Member.js"
import Serverbench from "../Serverbench.js"
import IListingSettings from "./IListingSettings.js"
import ListingSiteDisplay from "./ListingSiteDisplay.js"

export default class ListingDisplay {

    private readonly client: Serverbench

    public readonly id: string
    public readonly hash: string
    public readonly created: Date
    public readonly member: Member
    public readonly primaryCompleted: Date | null
    public readonly primaryNext: Date | null
    public readonly secondaryCompleted: Date | null
    public readonly secondaryNext: Date | null
    public readonly settings: IListingSettings
    public readonly sites: ListingSiteDisplay[]

    constructor(client: Serverbench, id: string, hash: string, created: Date, member: Member, primaryCompleted: Date | null, primaryNext: Date | null, secondaryCompleted: Date | null, secondaryNext: Date | null, settings: IListingSettings, sites: ListingSiteDisplay[]) {
        this.client = client
        this.id = id
        this.hash = hash
        this.created = created
        this.member = member
        this.primaryCompleted = primaryCompleted
        this.primaryNext = primaryNext
        this.secondaryCompleted = secondaryCompleted
        this.secondaryNext = secondaryNext
        this.settings = settings
        this.sites = sites
    }

    public static fromObject(serverbench: Serverbench, obj: any) {
        return new ListingDisplay(
            serverbench,
            obj.id,
            obj.hash,
            new Date(obj.created),
            Member.fromObject(serverbench, obj.member),
            obj.primaryCompleted ? new Date(obj.primaryCompleted) : null,
            obj.primaryNext ? new Date(obj.primaryNext) : null,
            obj.secondaryCompleted ? new Date(obj.secondaryCompleted) : null,
            obj.secondaryNext ? new Date(obj.secondaryNext) : null,
            obj.settings as IListingSettings,
            obj.sites.map((site: any) => ListingSiteDisplay.fromObject(site))
        )
    }
}