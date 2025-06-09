import Member from "../Member.js"
import Serverbench from "../Serverbench.js"
import ListingDisplay from "./ListingDisplay.js"

export default class Voting {

    private readonly client: Serverbench

    constructor(client: Serverbench) {
        this.client = client
    }

    public subscribe(member: Member, callback = (display: ListingDisplay|null, ban?: Date) => { }) {
        const { ws, dispose } = this.client.socket(`listing.display.${member.id}`, (data) => {
            if(data.ban){
                return callback(null, new Date(data.ban))
            }
            callback(ListingDisplay.fromObject(this.client, data))
        })
        return dispose
    }

}