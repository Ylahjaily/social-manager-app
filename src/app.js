import React ,{useEffect} from 'react';
import {connect} from "react-redux";
import {Switch, Route,NavLink} from 'react-router-dom';
import fetchAllUsers from './Actions/usersActions';
import SignInForm from './Components/Form/SignInForm';
import LoginForm from './Components/Form/LoginForm';

export const App = () =>
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

const mapStateToProps = (state) => {
    return {
        users : state.users
    }
}

export default connect(mapStateToProps,fetchAllUsers)(App);