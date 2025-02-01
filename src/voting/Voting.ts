import Serverbench from "../Serverbench.js"
import IListingDisplay from "./IListingDisplay.js"

export default class Voting {

    private readonly client: Serverbench

    constructor(client: Serverbench) {
        this.client = client
    }

    async get(username: string | null, eid: string | null) {
        return (await this.client.post('community', '/listing/display', {
            username,
            eid
        })) as IListingDisplay
    }

}