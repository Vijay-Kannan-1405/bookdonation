import React from 'react'
import './main.css'
import Background from './images/blob.jpeg'
import Corner from './images/blob-corner.png'



function Login() {

    return (
        <div className="full-body">
            <div>
                <img className="blob-corner-1" src={Corner} alt="blob"></img>
                <img className="blob-corner-2" src={Corner} alt="blob"></img>
                <img className="blob-corner-3" src={Corner} alt="blob"></img>
            </div>
            <div>
                <img className="image-bg" alt="bg" src={Background}></img>
                <h2 className="image-bg welcome-txt">WELCOME!</h2>
                <p className="image-bg below-txt">Enter your details and start joureny with us</p>
                <div className="image-bg">
                    <a href="/"> <button className="reg-but">SIGNUP</button></a>
                </div>
            </div>
            <div className="form">
                <h2 className="text-center">Sign in</h2>
                <form>
                    <div className="inputs">
                        <div className="input-container">
                            <i class="fa fa-user icon"></i>
                            <input className="input-field" type="email" name="emil-id"
                                aria-describedby="emailHelp" placeholder="Enter email" autoComplete='off' required />
                        </div>
                        <div className="input-container">
                            <i class="fa fa-key icon"></i>
                            <input className="input-field" type='password' name="password" id="pass" autoComplete='off' placeholder="Password" required />
                        </div>
                        <div>
                            <a href='/' className='forgot-pass'>Forgot Password</a>
                            <button type="submit" className="btn-log">LOGIN</button>
                        </div>
                    </div>
                </form>
                <div className="block">
                    <hr />
                    <div className="text">or</div>
                    <hr />
                </div>
                <p className="text-center">Login with your social media account</p>
                <div className="text-center social-btn">
                    <a href="/" className="btn btn-primary"><i class="fa fa-facebook"></i>&nbsp; Facebook</a>
                    <a href="/" className="btn btn-danger"><i class="fa fa-google"></i>&nbsp; Google</a>
                </div>
                <div className="below-register">
                    <hr />
                    <p className="text-center">Don't have an account yet ?<a href="/register" className="register">Create an account</a></p>
                </div>
            </div>
        </div>
    )
}

export default Login
