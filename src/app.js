import React ,{useEffect} from 'react';
import {connect} from "react-redux";
import fetchAllUsers from './Actions/usersActions';

export const App = () =>
{
    const handleUsers = ()=>{
        console.log("i will fetch ok");
        fetchAllUsers();
    }

    return (
        <div>
            <h1>Social Manager</h1>
            <button
                onClick={()=> handleUsers()}
            >
                click
            </button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        users : state.users
    }
}

export default connect(mapStateToProps,fetchAllUsers)(App);