import React, {useEffect} from 'react';

const ProposalsCard= ({proposal}) =>
{
    
    return (
        <div>
            <div className ="basic_div">
                <div>
                    <p>{proposal.title}</p>
                    <p>{proposal.textContent}</p>
                    <p>{proposal.date_publication_at}</p>
                    write by <p>{proposal.user_id.firstName}</p>
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

export default(ProposalsCard);