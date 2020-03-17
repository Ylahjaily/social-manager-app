import {FETCH_USERS} from "../../Actions/usersActions";

export default function users(state = [], action = []){
    if(action.type === "FETCH_USERS")
    {
        return action.users;
    }
    return state;
}