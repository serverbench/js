import Store from "./store/Store.js"

export default class Serverbench {

    clientId: string
    clientSecret: string
    test: boolean

    private static instance: Serverbench | null = null

    private constructor(clientId: string, clientSecret: string, test: boolean) {
        this.clientId = clientId
        this.clientSecret = clientSecret
        this.test = test
    }

    static get(clientId: string, clientSecret: string, test: boolean = false) {
        if (!Serverbench.instance || Serverbench.instance.clientId !== clientId || Serverbench.instance.clientSecret !== clientSecret || Serverbench.instance.test !== test) {
            Serverbench.instance = new Serverbench(clientId, clientSecret, test)
        }
        return Serverbench.instance
    }

    get store() {
        return new Store(this)
    }

    private async fetch(realm: string, url: string, body?: any) {
        const domain = this.test ? 'https://dev.serverbench.io' : 'https://api.beta.serverbench.io'
        const headers = new Headers({
            authorization: `ApiKey ${this.clientSecret}`,
        })
        if (body) {
            headers.set('Content-Type', 'application/json')
        }
        const response = await fetch(`${domain}/${realm}/${this.clientId}${url}`, {
            headers,
            method: body ? 'POST' : 'GET',
            body: body ? JSON.stringify(body) : undefined
        })
        return response.json()
    }

    async get(realm: string, url: string) {
        return this.fetch(realm, url)
    }

    async post(realm: string, url: string, body: any = {}) {
        return this.fetch(realm, url, body)
    }

}