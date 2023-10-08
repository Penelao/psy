import { collection, getDocs, addDoc, DocumentData, QueryDocumentSnapshot, SnapshotOptions, Timestamp, query, orderBy } from "firebase/firestore";
import {db} from "../firebase.ts";
import {FirestorePredictions, Predictions} from "./types.ts";

const predictionsConverter = {
    toFirestore(prediction: Predictions): DocumentData {
        return {value: prediction.value, insertTime: Timestamp.fromDate(prediction.insertTime)};
    },
    fromFirestore(
        snapshot: QueryDocumentSnapshot,
        options: SnapshotOptions
    ): Predictions {
        debugger
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
        const data: FirestorePredictions = snapshot.data(options) as FirestorePredictions;
        return {
            value: data.value,
            insertTime: data.insertTime.toDate()
        };
    }
};

export function getPredictions(){
   return getDocs(
       query(collection(db, "predictions").withConverter(predictionsConverter), orderBy("insertTime", "asc"))
   );
}

export function insertPredictions(prediction: Predictions){
    return addDoc(
        collection(db, "predictions").withConverter(predictionsConverter), prediction
    );
}
