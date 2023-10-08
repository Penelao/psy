import {useQuery} from "@tanstack/react-query";
import {getPredictions} from "../db/api.ts";
import {PredictionsList} from "../PredictionsList.tsx";
import AddPrediction from "./AddPrediction.tsx";

export const PredictionsPage: React.FC = () => {
    const {isError, isSuccess, data} = useQuery(["predictions"], () => getPredictions())
    return (<>
        <h1 style={{fontSize: "2.5rem"}}>2024 Predictions</h1>
        {
            isSuccess && <PredictionsList predictions={data} />
        }
        {
            isError && <>CAZZO</>
        }
        <AddPrediction />
        </>)
}
