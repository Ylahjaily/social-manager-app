import {combineReducers} from "redux";
import users from "./UserReducers/usersReducer";
import proposals from "./ProposalReducers/proposalsReducer";
import approvedProposalsReducer from "./ProposalReducers/proposalsApprovedReducer";

export default combineReducers({
    users,
    proposals,
    approvedProposalsReducer
})