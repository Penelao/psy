import {useForm} from "react-hook-form";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {insertPredictions} from "../db/api.ts";
import {Predictions} from "../db/types.ts";
import {SendHorizontal} from "lucide-react";


interface AddPredictionForm {
    value: string;
}

const AddPrediction: React.FC = () => {
    const {register, handleSubmit, reset, formState, getFieldState} = useForm<AddPredictionForm>({
        mode: "onSubmit",
        defaultValues: {
            value: "",
        }
    })
    const {invalid} = getFieldState("value", formState);
    const qk = useQueryClient();
    const {mutate} = useMutation((d: Predictions) => insertPredictions(d), {
        onSuccess: () => {
            void qk.invalidateQueries(["predictions"]);
            reset();
        }
    })

    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    return <form onSubmit={handleSubmit(({value}) => {
        mutate({value, insertTime: new Date()})
    })}>
        <div style={{position: "relative", width: "clamp(15rem, 100%, 800px)"}}>
            <textarea
                {...register("value", {required: "Requ", minLength: 10})}
                {...(invalid ? {required: true, minLength: 10} : {})}
                rows={4}
                placeholder="Write your prediction"
                style={{paddingRight: "2rem"}}
            />
            <button
                className="icon-btn"
                type="submit"
                style={{
                    position: "absolute",
                    right: "1rem",
                    bottom: "0.5rem",
                }}
            >
                <SendHorizontal />
            </button>
        </div>
        {invalid && <span style={{color: "red"}}>I furby sono arrabbiati con te</span>}


    </form>
}

export default AddPrediction;
