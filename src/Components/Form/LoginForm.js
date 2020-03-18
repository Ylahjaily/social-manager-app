import React,{Component}  from 'react';
import {connect} from "react-redux";
import login from "../../Actions/usersActions";

class LoginForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            firstName : '',
            lastName : '',
            username : '',
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
        if(this.state.username === '') errors.username = 'email cannot be Empty'
        if(this.state.password === '') errors.password = 'password cannot be Empty'
       
        this.setState({ errors })

        const isValid = Object.keys(errors).length === 0

        if(isValid)
        {
            const {username,password} = this.state
            this.setState({loading : true})
            this.props.login({username,password})
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
                <h1> Login!</h1>

                <label htmlFor='email'>email</label>
                <input type='email' id ='username' name='username' onChange={this.handleChange}/>

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

export default connect(null, {login})(LoginForm);