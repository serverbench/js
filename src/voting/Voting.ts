import Serverbench from "../Serverbench.js"
import ListingDisplay from "./ListingDisplay.js"

export default class Voting {

    private readonly client: Serverbench

    constructor(client: Serverbench) {
        this.client = client
    }

    async get(username: string | null, eid: string | null) {
        return ListingDisplay.fromObject(
            this.client,
            await this.client.post('community', '/listing/display', {
                username,
                eid
            })
        )
    }

}