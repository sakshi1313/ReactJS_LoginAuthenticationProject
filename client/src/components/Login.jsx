import React,{useContext, useState} from "react";
import { NavLink,useNavigate } from "react-router-dom";

import { UserContext} from "../App"; // has two values..state and dispatch


const Login =() => {

    // context API
    const {state,dispatch} = useContext(UserContext)

    const navigate = useNavigate()
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');


    const loginUser = async(e) => {
        e.preventDefault();

        const res = await fetch('/api/login',{
            // const res = await axios.get('/register',{
            /// ye vo route h backend wla..server side me
                method: "POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    email,
                    password  
                })
        });
        const data = res.json();
        if(res.status === 400 || !data)
        {
            window.alert("Invalid credential")
        }
        else{
            dispatch({type:"USER", payload:true})
            window.alert("LOgin successful")
            console.log("sucess login")
            navigate("/")
        }
    
    }




    return (
        <div>
            <section className="signup">
                <div className="container mt-5">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">Login</h2>
                            <form method ="POST" className="register-form" id="register-form">
                                
                                <div className="form-group">
                                    <label htmlFor="email">
                                        <i class="zmdi zmdi-account material-icons-name">
                                        </i>
                                    </label>
                                    <input type="email" name="email" id="email" autoComplete="off"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Your email"

                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password">
                                        <i class="zmdi zmdi-account material-icons-name">
                                        </i>
                                    </label>
                                    <input type="password" name="password" id="password" autoComplete="off"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}

                                        placeholder="password"

                                    />
                                </div>




                                <div className="form-group form-button">
                                    <input type="submit" name="login" id="login" className="form-submit" 
                                    value="login"
                                    onClick={loginUser}
                                    />
                                </div>

                                <NavLink to="/signup" className="signup-image-link">New? Signup </NavLink>

                                
                            </form>
                        </div>
                    </div>   
                </div>
            </section>
        </div>
    )
}

export default Login;