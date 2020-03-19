import {FETCH_USERS} from "../../Actions/usersActions";
import {LOGIN_USER} from "../../Actions/usersActions";

const initialState = {
    currentUser: {}
  }

export default function users(state = [], action = []){
    switch(action.type){
        case "LOGIN_USER" :
            return {...state, currentUser: action.payload}
        default:
            return state;
    }
    
}