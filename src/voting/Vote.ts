export default class Vote {
    public readonly completed: Date | null

    constructor(completed: Date | null) {
        this.completed = completed
    }

    public static fromObject(obj: any) {
        return new Vote(
            obj.completed ? new Date(obj.completed) : null
        )
    }
}