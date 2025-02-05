import Member from "../Member.js"
import Serverbench from "../Serverbench.js"
import ListingDisplay from "./ListingDisplay.js"

export default class Voting {

    private readonly client: Serverbench

    constructor(client: Serverbench) {
        this.client = client
    }

    public subscribe(member: Member, callback = (display: ListingDisplay) => { }) {
        const { ws, dispose } = this.client.socket(`listing.display.${member.id}`, (data) => {
            callback(ListingDisplay.fromObject(this.client, data))
        })
        return dispose
    }

}