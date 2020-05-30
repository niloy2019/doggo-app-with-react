import React, { Component } from 'react'
import {Redirect, Link} from 'react-router-dom'
import './login.css'

export class Login extends Component {

    constructor(props) {
        super(props)
        const token = localStorage.getItem("token")
        let loggedIn = true
        if(token==null){
            loggedIn = false
        }

        this.state = {
             username :'',
             password : '',
             loggedIn
        }

        this.onChange=this.onChange.bind(this)
        this.submitForm=this.submitForm.bind(this)
    }

    onChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    
    submitForm(e){
        e.preventDefault();
        const {username,password} = this.state
        let pass=localStorage.getItem(username)
        if(pass===password){
            localStorage.setItem("token","dfdf")
            this.setState({
                loggedIn : true
            })
        }

        // if(username==="A" && password==="B"){
           
        // }
    }

    render() {

        if(this.state.loggedIn){
            return <Redirect to="/home" />
        }

        return (
            <div>
                <img className="wave" src={require('./img/wave.png')} />
                <div className="container">
                    <div className="img">
                        <img src={require('./img/bg.svg')} />
                    </div>
                    <div className="login-content">
                        <form onSubmit={this.submitForm}>
                            <img src={require('./img/avatar.svg')} />
                            <h2 className="title">Welcome</h2>
                            <div className="input-div one">
                                 <div className="i">
                                        <i className="fas fa-user"></i>
                                </div>
                                <div className="div">
                                    {/* <h5>Username</h5> */}
                                    <input type="text" placeholder="Username" required className="input" name="username" value={this.state.username}  onChange={this.onChange} />
                                 </div>
                           </div>
                            <div className="input-div pass">
                                <div className="i"> 
                                        <i className="fas fa-lock"></i>
                                </div>
                                <div className="div">
                                        {/* <h5>Password</h5> */}
                                        <input type="password" placeholder="Password"   className="input" name="password" value={this.state.password}  onChange={this.onChange} />
                                </div>
                            </div>
                            <Link to="/signup" >Don't Have an Account?</Link>
                            {/* <a href="#" ></a> */}
                            <input type="submit" className="btn" value="Login" />
                        </form>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Login
