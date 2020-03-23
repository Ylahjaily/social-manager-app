import {combineReducers} from "redux";
import currentUser from "./UserReducers/authReducer";
import proposals from "./ProposalReducers/proposalsReducer";
import approvedProposalsReducer from "./ProposalReducers/proposalsApprovedReducer";

export default combineReducers({
    currentUser,
    proposals,
    approvedProposalsReducer
})