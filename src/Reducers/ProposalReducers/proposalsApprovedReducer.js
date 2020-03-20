import {FETCH_PROPOSALS_APPROVED} from "../../Actions/proposalsApprovedActions";

export default function approvedProposalsReducer(state = [], action = []){
    if(action.type === "FETCH_PROPOSALS_APPROVED"){

        return  action.approvedProposals;
                    
    }
    return state;
}

