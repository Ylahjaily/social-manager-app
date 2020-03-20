import React, {useEffect} from 'react';
import {connect} from "react-redux";
import fetchApprovedProposals from "../Actions/proposalsApprovedActions";
import ProposalsApprovedList from "../Lists/ProposalsApprovedList";

const ProposalsApprovedPage = (props) =>
{
   
    useEffect(() => {
        props.fetchApprovedProposals()
        console.log(props)
        console.log(props.approvedProposals)
    
      }, []);

    return (
        <div>
            <h1>proposals approved</h1>
            <ProposalsApprovedList/>
        </div>
    )

}

const mapDispatchToProps = dispatch => ({
    fetchApprovedProposals: () =>  dispatch(fetchApprovedProposals())
  })

const mapStateToProps = (state) => {
    return {
        approvedProposals: state.approvedProposalsReducer
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProposalsApprovedPage);