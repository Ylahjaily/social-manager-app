import React, {useEffect} from 'react';
import {connect} from "react-redux";
import ProposalApprovedCard from "../Components/ProposalApprovedCard";

const ProposalsApprovedList = (props) =>
{
    
        const approvedProposals = props.approvedProposals;
    
    

    const emptyMessage = (<p>Loading</p>)

    const proposalsApprovedList = (
        <div>
          
          {
              approvedProposals.map((approvedProposal)=> <ProposalApprovedCard approvedProposal={approvedProposal} key ={approvedProposal.id}/>)}/>)
          }
        </div>
    )

    return (
        <div>
            {approvedProposals.length === 0 ? emptyMessage : proposalsApprovedList }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        approvedProposals: state.approvedProposalsReducer
    }
}

export default connect(mapStateToProps)(ProposalsApprovedList);