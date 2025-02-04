declare class Vote {
    readonly completed: Date | null;
    constructor(completed: Date | null);
    static fromObject(obj: any): Vote;
}

export { Vote as default };
