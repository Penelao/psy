import {Predictions} from "./db/types.ts";
import { QuerySnapshot } from "firebase/firestore";

interface PredictionsListProps {
    predictions: QuerySnapshot<Predictions>
}

export const PredictionsList: React.FC<PredictionsListProps> = ({ predictions }) => {
    if(predictions.empty) {
        return <>No predictions found</>
    }

    return (<ul>
            {predictions.docs
                .map(x => x.data())
                .map(prediction => <Prediction key={prediction.insertTime.getTime()} prediction={prediction} />)}
        </ul>)
}

const Prediction: React.FC<{prediction: Predictions}> = ({ prediction }) => {
    return <li style={{whiteSpace: "pre-wrap"}}>
        {prediction.value}
    </li>
}
