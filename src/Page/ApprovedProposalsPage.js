import React, {useEffect} from 'react';
import {connect} from "react-redux";
import fetchApprovedProposals from "../Actions/proposalsApprovedActions";


const ProposalApprovedPage = (props) =>
{
    
    const handleClick =() =>{
        console.log("ok");
        props.fetchApprovedProposals();
    }

    return (
        <div>
            <h1>proposals approved</h1>
            <button onClick={()=>handleClick()}></button>
        </div>
    )

}

const mapDispatchToProps = dispatch => ({
    fetchApprovedProposals: () =>  dispatch(fetchApprovedProposals())
  })

const mapStateToProps = (state) => {
    return {
        approvedProposals : state.approvedProposals
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProposalApprovedPage);