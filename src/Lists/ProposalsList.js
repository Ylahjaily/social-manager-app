import React, {useEffect} from 'react';
import {connect} from "react-redux";
import ProposalsCard from "../Components/ProposalCard";


const ProposalsList = (props) =>
{
    console.log(props.proposals)
    const proposals = props.proposals;

    const emptyMessage = (<p>Loading</p>)

    const proposalsList = (
        <div>
          {
              proposals.map(proposal=> <ProposalsCard proposal={proposal} key ={proposal.id}/>)
          }
        </div>
    )

    return (
        <div>
            {proposals.length === 0 ? emptyMessage : proposalsList }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        proposals : state.proposals
    }
}

export default connect(mapStateToProps)(ProposalsList);