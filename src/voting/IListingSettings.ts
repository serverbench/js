import IListingAmountSettings from "./IListingAmountSettings.js"

export default interface IListingSettings {
    primary: IListingAmountSettings
    secondary: IListingAmountSettings
    lookAhead: number
}