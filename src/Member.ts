import Serverbench from "./Serverbench.js"

export default class Member {
    private readonly client: Serverbench

    public readonly name: string
    public readonly eid: string
    public readonly id: string
    public readonly voteBanned: Date | null = null

    constructor(client: Serverbench, name: string, eid: string, id: string, voteBanned: Date | null) {
        this.client = client
        this.name = name
        this.eid = eid
        this.id = id
        this.voteBanned = voteBanned ? voteBanned : null
    }

    public static fromObject(client: Serverbench, object: any) {
        return new Member(client, object.name, object.eid, object.id, object.voteBanned ? new Date(object.voteBanned) : null)
    }
}