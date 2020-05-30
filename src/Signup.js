import React, { Component } from 'react'
import {Redirect,Link} from 'react-router-dom'
import './login.css'

export class Signup extends Component {

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
            localStorage.setItem(username,password)
            this.setState({
                loggedIn : true
            })
        
    }

    render() {

        if(this.state.loggedIn){
            return <Redirect to="/" />
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
                            <h2 className="title">Let's Start</h2>
                            <div className="input-div one">
                                 <div className="i">
                                        <i className="fas fa-user"></i>
                                </div>
                                <div className="div">
                                    {/* <h5>Name</h5> */}
                                    <input type="text" placeholder="Username" required className="input" name="username" value={this.state.username}  onChange={this.onChange} />
                                 </div>
                           </div>
                           <div className="input-div one">
                                 <div className="i">
                                        <i className="fas fa-user"></i>
                                </div>
                                <div className="div">
                                    {/* <h5>Mobile</h5> */}
                                    <input type="text" placeholder="Mobile" required className="input"  />
                                 </div>
                           </div>
                           <div className="input-div one">
                                 <div className="i">
                                        <i className="fas fa-user"></i>
                                </div>
                                <div className="div">
                                    {/* <h5>Email</h5> */}
                                    <input type="email" placeholder="Email" required className="input" />
                                 </div>
                           </div>
                           {/* <div className="input-div one">
                                 <div className="i">
                                        <i className="fas fa-user"></i>
                                </div>
                                <div className="div">
                                    <h5>Username</h5>
                                    <input type="text" placeholder="Username" required className="input" />
                                 </div>
                           </div> */}
                            <div className="input-div pass">
                                <div className="i"> 
                                        <i className="fas fa-lock"></i>
                                </div>
                                <div className="div">
                                        {/* <h5>Password</h5> */}
                                        <input type="password" placeholder="Password" required className="input" name="password" value={this.state.password}  onChange={this.onChange} />
                                </div>
                            </div>
                            <Link to="/" >Already Have Account?</Link>
                            <input type="submit" className="btn" value="Signup" />
                        </form>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Signup
