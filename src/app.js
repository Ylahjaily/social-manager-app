import React ,{useEffect, Component} from 'react';
import Button from '@material-ui/core/Button';
import {connect} from "react-redux";
import {Switch, Route,NavLink} from 'react-router-dom';
import SignInForm from './Components/Form/SignInForm';
import LoginForm from './Components/Form/LoginForm';
import fetchAllProposals from "./Actions/proposalsActions";
import ProposalsList  from "./Lists/ProposalsList";
import ProposalsApprovedPage from "./Page/ProposalsApprovedPage";
import ProposalsPage from "./Page/ProposalsPage";


class App extends Component
{

    render()
    {

        return (
            <div>
                <h1>Social Manager</h1>
                <NavLink to={"/signin"}><Button variant="contained" color="primary">Sign In</Button></NavLink>
                <NavLink to={"/login"}><Button variant="contained" color="primary">LogIn</Button></NavLink>
                <NavLink to={"/proposals"}><Button variant="contained" color="primary">All Proposals</Button></NavLink>
                <NavLink to={"/proposals_approved"}><Button variant="contained" color="secondary">Approved Proposals</Button></NavLink>
                <Route path ="/signin" exact component={SignInForm}/>
                <Route path="/login" exact component={LoginForm}/>
                <Route path= "/proposals" exact component={ProposalsPage}/>
                <Route path= "/proposals_approved" exact component={ProposalsApprovedPage}/>
                
            </div>
        )

    }
}



export default connect(null)(App);