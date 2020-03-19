import React ,{useEffect, Component} from 'react';
import {connect} from "react-redux";
import {Switch, Route,NavLink} from 'react-router-dom';
import fetchAllUsers from './Actions/usersActions';
import SignInForm from './Components/Form/SignInForm';
import LoginForm from './Components/Form/LoginForm';
import fetchAllProposals from "./Actions/proposalsActions";

class App extends Component
{

    componentDidMount(){
        this.props.fetchAllProposals()
    };

    render()
    {

        return (
            <div>
                <h1>Social Manager</h1>
                <NavLink to={"/signin"}>Sign In</NavLink>
                <NavLink to={"/login"}>Login</NavLink>
                <Route path ="/signin" exact component={SignInForm}/>
                <Route path="/login" exact component={LoginForm}/>
    
            </div>
        )

    }
}

const mapDispatchToProps = dispatch => ({
    fetchAllProposals: userInfo => dispatch(fetchAllProposals(userInfo))
  })

const mapStateToProps = (state) => {
    return {
        proposals : state.proposals
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);