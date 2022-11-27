import React, { Component, useState } from "react";
import './Login.css'
import 'bootstrap/dist/css/bootstrap.css';
// import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate } from 'react-router-dom'



const Login = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    async function loginUser(event) {
        event.preventDefault()

        const response = await fetch('http://localhost:3001/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })

        const data = await response.json()

        if (data.user) {
            localStorage.setItem('token', data.user)
            alert('Login successful')
            window.location.href = '/dashboard'
        } else {
            alert('Please check your username and password')
        }
    }

    async function registerUser(event) {
        event.preventDefault()

        const response = await fetch('http://localhost:3001/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                password,
            }),
        })

        const data = await response.json()

        if (data.status === 'ok') {
            navigate('/login')
        }
    }



    return (
        <>

            <div className="section">
                <div className="container">
                    <div className="row full-height justify-content-center">
                        <div className="col-12 text-center align-self-center py-5">
                            <div className="section pb-5 pt-5 pt-sm-2 text-center">
                                <h6 className="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
                                <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                                <label for="reg-log"></label>
                                <div className="card-3d-wrap mx-auto">
                                    <div className="card-3d-wrapper">
                                        <div className="card-front">
                                            <div className="center-wrap">
                                                <div className="section text-center">
                                                    <h4 className="mb-4 pb-3 bg-wi">Log In</h4>
                                                    <form id="Loginform" onSubmit={loginUser}>
                                                        <div className="form-group">
                                                            <label id="msg_email" className="err_msg" ></label>
                                                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemail" autoComplete="off" />
                                                            <i className="input-icon uil uil-at bi bi-envelope-at icon-white"></i>
                                                        </div>
                                                        <div className="form-group mt-2">
                                                            <label id="msg_pswd" className="err_msg" ></label><br />
                                                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="logpass" className="form-style" placeholder="Your Password" id="logpass" autoComplete="off" />
                                                            <i className="input-icon uil uil-lock-alt"></i>
                                                        </div>
                                                        <a href="Listings" className="button mt-4">submit</a>
                                                        {/* <input type="submit" className="button mt-4" value="Submit" /> */}
                                                        <p className="mb-0 mt-4 text-center"><a href="#" className="link">Forgot your password?</a></p>
                                                    </form>
                                                </div>


                                            </div>
                                        </div>
                                        <div className="card-back">
                                            <div className="center-wrap">
                                                <div className="section text-center">
                                                    <form onSubmit={registerUser}>

                                                        <h4 className="mb-4 pb-3 bg-wi">Sign Up</h4>
                                                        <div className="form-group">
                                                            <input
                                                                value={name}
                                                                onChange={(e) => setName(e.target.value)} type="text" name="logname" className="form-style" placeholder="Your Full Name" id="logname" autoComplete="off" />
                                                            <i className="input-icon uil uil-user"></i>
                                                        </div>
                                                        <div className="form-group mt-2">
                                                            <input
                                                                value={email}
                                                                onChange={(e) => setEmail(e.target.value)} type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemail" autoComplete="off" />
                                                            <i className="input-icon uil uil-at"></i>
                                                        </div>
                                                        <div className="form-group mt-2">
                                                            <input
                                                                value={password}
                                                                onChange={(e) => setPassword(e.target.value)} type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass" autoComplete="off" />
                                                            <i className="input-icon uil uil-lock-alt"></i>
                                                        </div>
                                                        <input type="submit" value="Register" className="button mt-4" />
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>



    );
}


export default Login;
