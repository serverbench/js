import ISiteSetup from "./ISiteSetup.js"
import IVote from "./IVote.js"

export default interface IListingSiteDisplay {
    id: string
    index: number
    last: IVote | null
    next: Date | null
    primary: boolean
    secondary: boolean
    site: ISiteSetup
}