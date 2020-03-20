export const FETCH_PROPOSALS = "FETCH_PROPOSALS";

const baseUrl = "http://145.239.91.81";

export const setAllProposals = (proposals) => {
    return {
        type : FETCH_PROPOSALS,
        proposals
    }
}

export const fetchAllProposals=(token)=>{
    return dispatch => {
        if(localStorage.getItem('login'))
        {
            let token = JSON.parse(localStorage.getItem('login'));
            let tokenAcces = token.token;

            if(tokenAcces){
                return fetch(`${baseUrl}` + '/api/admin/proposals',
                {
                    method : 'GET',
                    headers : {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Authorization' : `Bearer ${tokenAcces}`,
                        'Access-Control-Allow-Origin' : '*'
                    }
                })
                .then(response => response.json())
                .then(data => dispatch(setAllProposals(data)))
            }
        }
    }
}

export default (fetchAllProposals);