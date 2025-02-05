import Serverbench from "./Serverbench.js"

export default class Member {
    private readonly client: Serverbench

    public readonly name: string
    public readonly eid: string
    public readonly id: string

    constructor(client: Serverbench, name: string, eid: string, id: string) {
        this.client = client
        this.name = name
        this.eid = eid
        this.id = id
    }

    public static fromObject(client: Serverbench, object: any) {
        return new Member(client, object.name, object.eid, object.id)
    }
}