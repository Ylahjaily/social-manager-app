import React ,{useEffect} from 'react';
import {connect} from "react-redux";
import fetchAllUsers from './Actions/usersActions';
import SignInForm from './Components/Form/SignInForm';
import LoginForm from './Components/Form/LoginForm';

export const App = () =>
{
    const handleUsers = ()=>{
        fetchAllUsers();
    }

    return (
        <div>
            <h1>Social Manager</h1>
            <button
                onClick={handleUsers()}
            >
                click
            </button>
            <SignInForm/>
            <LoginForm/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        users : state.users
    }
}

export default connect(mapStateToProps,fetchAllUsers)(App);