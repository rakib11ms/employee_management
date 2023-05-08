import '../Register/register.css';
import axios from 'axios'
import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
function Login(){
    const navigate=useNavigate();
    const [registerInputState,setRegisterInputState]=useState({
        name:"",
        email:"",
        password:"",
        confirm_password:""
    })

   const handleChange=(e)=>{
    setRegisterInputState({
        ...registerInputState,[e.target.name]:e.target.value
    })
   }
   axios.post(`/save-registration`, registerInputState).then(res => {
    if (res.data.status == 200) {
        navigate('/view-all-jobs')
        setRegisterInputState({
                name:"",
                email:"",
                password:"",
                confirm_password:""
        });

    }
});
    return (
        <>
            <div class="wrapper">
                <div class="form-left">
                    <h2 class="text-uppercase">information</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et molestie ac feugiat sed. Diam volutpat commodo.
                    </p>
                    <p class="text">
                        <span>Sub Head:</span>
                        Vitae auctor eu augudsf ut. Malesuada nunc vel risus commodo viverra. Praesent elementum facilisis leo vel.
                    </p>
                    <div class="form-field">
                        <Link to="/register">
                        <input type="text" class="account" value="Haven't account?" />

                        </Link>
                    </div>
                </div>
                <form class="form-right">
                    <h2 class="text-uppercase">Login form</h2>
                    <div class="row">
                        <div class="col-sm-12 mb-3">
                            <label>Your Email</label>
                            <input type="email" class="input-field" name="email" value={registerInputState.email} required onChange={handleChange} />
                        </div>
                        {/* <div class="col-sm-6 mb-3">
                    <label>Last Name</label>
                    <input type="text" name="last_name" id="last_name" class="input-field"/>
                </div> */}
                    </div>
                 
                    <div class="row">
                        <div class="col-sm-12 mb-3">
                            <label>Password</label>
                            <input type="password" name="password" id="password" class="input-field" value={registerInputState.password} onChange={handleChange}/>
                        </div>
                      
                    </div>
                    <div class="mb-3">
                        <label class="option">Remember Password 
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                        </label>
                    </div>
                    <div class="form-field">
                        <input type="submit" value="Login" class="register" name="register" />
                    </div>
                </form>
            </div>
        </>
    )
}
export default Login;