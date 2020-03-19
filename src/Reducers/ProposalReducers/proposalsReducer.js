import {FETCH_PROPOSALS} from "../../Actions/proposalsActions";

export default function proposals(state = [], action = []){
    if(action.type === "FETCH_PROPOSALS")
    {
        return action.proposals;
    }
    return state;
}