import axios from 'axios'
import { useState } from 'react'
import '../Register/register.css'
import { Navigate, useNavigate } from 'react-router-dom'
function Register() {

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
                        <input type="submit" class="account" value="Have an Account?" />
                    </div>
                </div>
                <form class="form-right">
                    <h2 class="text-uppercase">Registration form</h2>
                    <div class="row">
                        <div class="col-sm-12 mb-3">
                            <label>Full Name</label>
                            <input type="text" name="name" id="name"value={registerInputState.name} class="input-field" onChange={handleChange}/>
                        </div>
                        {/* <div class="col-sm-6 mb-3">
                    <label>Last Name</label>
                    <input type="text" name="last_name" id="last_name" class="input-field"/>
                </div> */}
                    </div>
                    <div class="mb-3">
                        <label>Your Email</label>
                        <input type="email" class="input-field" name="email" value={registerInputState.email} required onChange={handleChange} />
                    </div>
                    <div class="row">
                        <div class="col-sm-6 mb-3">
                            <label>Password</label>
                            <input type="password" name="password" id="password" class="input-field" value={registerInputState.password} onChange={handleChange}/>
                        </div>
                        <div class="col-sm-6 mb-3">
                            <label>Confirm Password</label>
                            <input type="password" name="confirm_password" id="confirm_password"  value={registerInputState.confirm_password} onChange={handleChange} class="input-field" />
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="option">I agree to the <a href="#">Terms and Conditions</a>
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                        </label>
                    </div>
                    <div class="form-field">
                        <input type="submit" value="Register" class="register" name="register" />
                    </div>
                </form>
            </div>
        </>
    )
}
export default Register