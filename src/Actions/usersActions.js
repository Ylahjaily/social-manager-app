export const FETCH_USERS = "FETCH_USERS";

const baseUrl = "http://145.239.91.81"

export const setAllUsers = (users) => {
    return {
        type : FETCH_USERS,
        users
    }
}

export const fetchAllUsers=()=>{
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

export const register=(data)=>{
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

export const userLoginFetch= (data) =>{
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

export default(fetchAllUsers,register,userLoginFetch);

