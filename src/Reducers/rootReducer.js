import {combineReducers} from "redux";
import users from "./UserReducers/usersReducer";
import proposals from "./ProposalReducers/proposalsReducer"

export default combineReducers({
    users,
    proposals
})