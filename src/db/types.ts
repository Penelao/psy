export interface Predictions {
    value: string;
    insertTime: Date;
}

export interface FirestorePredictions {
    value: string;
    insertTime: {
        seconds: number;
        nanoSeconds: number;
        toDate: () => Date;
    };
}
