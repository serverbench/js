import { nanoid } from "nanoid/non-secure"
import Member from "./Member.js"
import Store from "./store/Store.js"
import Voting from "./voting/Voting.js"

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

    get voting() {
        return new Voting(this)
    }

    public async member(find: {
        username?: string,
        eid?: string,
    }) {
        return Member.fromObject(this, await this.post('community', '/member/search', find))
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
        if (response.status < 200 || response.status >= 300) {
            throw new Error(response.statusText)
        }
        
        return response.json()
    }

    private rid() {
        return nanoid()
    }

    public socket(action: string, handleMessage = (data: any) => { }, ignoreClose = false) {
        const domain = this.test ? 'ws://localhost:3030' : 'wss://live.beta.serverbench.io'
        let ws = new WebSocket(`${domain}?${new URLSearchParams({
            key: this.clientSecret,
        })}`)
        let i = 0
        let expecting = this.rid()
        ws.onopen = () => {
            i = 0
            ws.send(JSON.stringify({
                action: `community.${this.clientId}.${action}`,
                rid: expecting
            }))
        }
        ws.onmessage = (event) => {
            const data = JSON.parse(event.data)
            if (data.result != null && ((Array.isArray(data.result) && data.result.length) || Object.keys(data.result).length > 0) && data.rid == expecting) {
                handleMessage(data.result)
            } else {
                let action = [data.realm]
                if (data.realm == 'community') {
                    action.push(this.clientId)
                }
                action.push(data.action)
                expecting = this.rid()
                ws.send(JSON.stringify({
                    action: action.join('.'),
                    rid: expecting
                }))
            }
        }
        if (!ignoreClose) {
            ws.onclose = () => {
                i++
                setTimeout(() => {
                    ws = this.socket(action, handleMessage, true).ws
                }, Math.min(1000 * (i) * 5, 30 * 1000));
            }
        }
        return {
            dispose: () => {
                ws.onclose = null
                ws.close()
            },
            ws
        }
    }

    async get(realm: string, url: string) {
        return this.fetch(realm, url)
    }

    async post(realm: string, url: string, body: any = {}) {
        return this.fetch(realm, url, body)
    }

}