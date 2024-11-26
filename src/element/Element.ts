import { initialize } from "../../node_modules/@open-iframe-resizer/core/dist/index.js"
import Serverbench from "../Serverbench.js"

export default class Element {

    private readonly client: Serverbench
    private dark: boolean
    private background: boolean
    private readonly path: string
    private readonly args: Record<string, string | string[]>

    constructor(client: Serverbench, path: string, args: Record<string, string | string[]> = {}, dark: boolean = false, background: boolean = false) {
        this.client = client
        this.dark = dark
        this.background = background
        this.path = path
        this.args = args
    }

    setDark(dark: boolean) {
        this.dark = dark
        return this
    }

    setBackground(background: boolean) {
        this.background = background
        return this
    }

    async mount(element: HTMLElement) {
        const queryParams = new URLSearchParams()
        queryParams.set('clientId', this.client.clientId)
        queryParams.set('clientSecret', this.client.clientSecret)
        queryParams.set('origin', window.location.href)
        if (this.dark) queryParams.set('dark', 'true')
        if (this.background) queryParams.set('background', 'true')
        for (const key in this.args) {
            const value = this.args[key]
            if (Array.isArray(value)) {
                if (value.length > 0) queryParams.set(key, value.join(','))
            } else {
                queryParams.set(key, value)
            }
        }

        element.innerHTML = '';

        const iframe = document.createElement('iframe');
        iframe.src = `https://safe.serverbench.io${this.path}?${queryParams.toString()}`;
        iframe.style.width = '100%';
        iframe.style.height = '0'
        iframe.style.border = 'none';
        iframe.style.overflowY = 'hidden';
        iframe.frameBorder = '0';
        
        const appended = element.appendChild(iframe);
        initialize({}, appended);
        return this
    }

}