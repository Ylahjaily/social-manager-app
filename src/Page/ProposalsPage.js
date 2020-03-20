import React, {useEffect} from 'react';
import {connect} from "react-redux";
import ProposalsList from "../Lists/ProposalsList";
import fetchAllProposals from "../Actions/proposalsActions";


const ProposalsPage = (props) =>
{
    
    useEffect(() => {
        props.fetchAllProposals()
      }, []);

    return (
        <div>
            <h1>Proposals</h1>
            <ProposalsList/>
        </div>
    )

}

const mapDispatchToProps = dispatch => ({
    fetchAllProposals: () =>  dispatch(fetchAllProposals())
  })

const mapStateToProps = (state) => {
    return {
        proposals : state.proposals
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProposalsPage);