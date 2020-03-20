import React, {useEffect} from 'react';

const ProposalApprovedCard = ({approvedProposal}) =>
{
    
    return (
        <div>
            <div className ="basic_div">
                <div>
                    <p>{approvedProposal.title}</p>
                    <p>{approvedProposal.textContent}</p>
                    <p>{approvedProposal.date_publication_at}</p>
                    write by <p>{approvedProposal.user_id.firstName}</p>
                 </div>
             </div>
             <div>
                 <h1>Comments</h1>
                 <textarea/>
             </div>
             <div>
                 <button>
                     Review
                 </button>
             </div>
        </div>
    )
}

export default(ProposalApprovedCard);