export const FETCH_USERS = "FETCH_USERS";

const baseUrl = "http://localhost:80"

export const setAllUsers = (users) => {
    return {
        type : FETCH_USERS,
        users
    }
}

export function fetchAllUsers(){
    return dispatch => {
        fetch(`${baseUrl}` + '/api/users',
        {
            method : 'GET',
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin' : '*'
            }
        })
        .then(response => response.json())
        .then(data => dispatch(setAllUsers(data)))
    }
}

export default(fetchAllUsers);