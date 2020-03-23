import {FETCH_LOGIN} from "../../Actions/usersActions";

export default function currentUser(state = [], action = []){
    if(action.type === "FETCH_LOGIN")
    {
        return action.currentUser;
    }
    return state;
}
