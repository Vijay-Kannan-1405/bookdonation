import React from 'react'
import './main.css'



function Login() {

    // return statement
    return (
        <div>
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
                            <input className="input-field"  type='text' name="password" id="pass" autoComplete='off' placeholder="Password" required />                       
                        </div>   
                        <div className='login-bottom'>
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
                    <a href="#" className="btn btn-primary"><i class="fa fa-facebook"></i>&nbsp; Facebook</a>
                    <a href="#" className="btn btn-danger"><i class="fa fa-google"></i>&nbsp; Google</a>
                </div>
                <hr />
                <p className="text-center">Don't have an account yet ?<a href="/register" className="register">Create an account</a></p>
            </div>
            
        </div>
    )
}

export default Login
