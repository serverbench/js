import Element from "../element/Element.js"
import Serverbench from "../Serverbench.js"

export default class Voting {

    private readonly client: Serverbench

    constructor(client: Serverbench) {
        this.client = client
    }

    list(username?: string, eid?: string) {
        return new Element(this.client, '/community/vote/list', {
            username,
            eid
        })
    }

}