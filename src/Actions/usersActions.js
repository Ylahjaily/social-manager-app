export const FETCH_USERS = "FETCH_USERS";

const baseUrl = "http://145.239.91.81"

export const setAllUsers = (users) => {
    return {
        type : FETCH_USERS,
        users
    }
}

export default function fetchAllUsers(){
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