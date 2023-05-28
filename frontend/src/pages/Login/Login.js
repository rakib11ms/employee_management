import '../Register/register.css';
import axios from 'axios'
import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';

function Login() {
    const navigate = useNavigate();
    const [loginInput, setloginInput] = useState({
        email: "",
        password: "",
    })

    const handleChange = (e) => {
        setloginInput({
            ...loginInput, [e.target.name]: e.target.value
        })
    }


    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('/api/login', loginInput).then(res => {
            const user = res.data.user;

            // Save user information in localStorage
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('auth_token', res.data.token);
            console.log(res.data);
            if(res.data.status==200){
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Login Successfull',
                    confirmButtonText: 'OK',
                });
                navigate('/dashboard')
            }
            else if(res.data.status==400){
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: res.data.error,
                    confirmButtonText: 'OK',
                });
            }
    
        })
    };
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
                <form class="form-right" onSubmit={handleSubmit}>
                    <h2 class="text-uppercase">Login form</h2>
                    <div class="row">
                        <div class="col-sm-12 mb-3">
                            <label>Your Email</label>
                            <input type="email" class="input-field" name="email" value={loginInput.email} required onChange={handleChange} />
                        </div>
                        {/* <div class="col-sm-6 mb-3">
                    <label>Last Name</label>
                    <input type="text" name="last_name" id="last_name" class="input-field"/>
                </div> */}
                    </div>

                    <div class="row">
                        <div class="col-sm-12 mb-3">
                            <label>Password</label>
                            <input type="password" name="password" id="password" class="input-field" value={loginInput.password} onChange={handleChange} />
                        </div>

                    </div>

                    <div class="form-field">
                        <input type="submit" value="Login" class="register" name="login" />
                    </div>
                </form>
            </div>
        </>
    )
}
export default Login;