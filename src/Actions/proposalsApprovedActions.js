export const FETCH_PROPOSALS_APPROVED = "FETCH_PROPOSALS_APPROVED";

const baseUrl = "http://localhost:80";

const setApprovedProposals = (approvedProposals) => {
    return {
        type : FETCH_PROPOSALS_APPROVED,
        approvedProposals
    }
}

export const fetchApprovedProposals=()=>{
    return dispatch => {
        if(localStorage.getItem('login'))
        {
            let token = JSON.parse(localStorage.getItem('login'));
            let tokenAcces = token.token;

            if(tokenAcces){
                return fetch(`${baseUrl}` + '/api/communicant/proposals/approved',
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
                .then(approvedProposals => dispatch(setApprovedProposals(approvedProposals),))
            }
        }
    }
}

export default (fetchApprovedProposals);