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

export function addUser(data){
    return dispatch => {
        return fetch(`${baseUrl}`+'/auth/register',{
            method : 'POST',
            body : JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Accept':'application/json',
                'Access-Control-Allow-Origin' : '*'
            },
        })
    }
}

export function login(data){
    return dispatch => {
        return fetch(`${baseUrl}`+'/api/auth/login',{
            method : 'POST',
            body : JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Accept':'application/json',
                'Access-Control-Allow-Origin' : '*'
            },
        })
        .then((response => {
            response.json()
            .then(result => {
                console.log(result)
                localStorage.setItem('login',JSON.stringify({
                    login: true,
                    token: result.token
                }))
            })
        }))
    }
}

export default(fetchAllUsers,addUser,login);