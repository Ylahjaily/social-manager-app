import React,{Component}  from 'react';
import {connect} from "react-redux";
import addUser from "../../Actions/usersActions";

class SignInForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            firstName : '',
            lastName : '',
            email : '',
            apiKey : '',
            password : '',
            roles : ['ROLE_USER'],
            errors : {},
            loading : false,
            done : false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        if(!!this.state.errors[e.target.name])
        {
            let errors = Object.assign({},this.state.errors)
            delete errors[e.target.name]
            this.setState({
                [e.target.name] : e.target.value,
                errors
            })
        } else {
            this.setState({[e.target.name] : e.target.value})
        }
    }

    handleSubmit(e){
        e.preventDefault()
        let errors = {};
        if(this.state.firstName === '') errors.firstname = 'firstname cannot be Empty'
        if(this.state.lastName === '') errors.lastname = 'lastname cannot be Empty'
        if(this.state.email === '') errors.firstname = 'email cannot be Empty'
        if(this.state.apiKey === '') errors.firstname = 'apiKey cannot be Empty'
        if(this.state.password === '') errors.password = 'password cannot be Empty'
       
        this.setState({ errors })

        const isValid = Object.keys(errors).length === 0

        if(isValid)
        {
            const {firstName,lastName,apiKey,email,password,roles} = this.state
            this.setState({loading : true})
            this.props.addUser({firstName,lastName,apiKey,email,password},roles)
                .then(
                    () => {this.setState({done : true})},
                    (err) => err.response.json().then(({errors}) => this.setState({errors, loading : false}))
                )
        }
    }

    render()
    {
        const form = (
        

            <form onSubmit={this.handleSubmit}>
                <h1> Sig in!</h1>

                <label htmlFor='firstName'>Firstname</label>
                <input type='text' id ='firstName' name='firstName' onChange={this.handleChange}/>

                <label htmlFor='lastName'>lastname</label>
                <input type='text' id ='lastName' name='lastName' onChange={this.handleChange}/>

                <label htmlFor='email'>email</label>
                <input type='email' id ='email' name='email' onChange={this.handleChange}/>

                <label htmlFor='apiKey'>apiKey</label>
                <input type='text' id ='apiKey' name='apiKey' onChange={this.handleChange}/>

                <label htmlFor='password'>password</label>
                <input type='text'  id ='password' name='password' onChange={this.handleChange}/>

                <input type='submit' value='submit'/>
            </form>

        )
        return (
            <div>
                {
                    this.state.done ? <h1>ok</h1> : form
                }
            </div>
        )
        
    }
}

export default connect(null, {addUser})(SignInForm);