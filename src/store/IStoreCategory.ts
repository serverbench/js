import type ISku from "./ISku.js"
import type IStoreCategorySet from "./IStoreCategorySet.js"

export default interface IStoreCategory {
    id: string
    name: string
    skus: ISku[]
    sets: IStoreCategorySet[]
    policy: string | null
}