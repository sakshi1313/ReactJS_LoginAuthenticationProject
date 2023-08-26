import React,{useState} from "react";
import { NavLink ,useNavigate} from "react-router-dom";
// import axios from "axios";


const SignUp =() => {

    const navigate = useNavigate()
    const [user,setUser] = useState({
        name:"",email:"",phone:"",work:"",password:"",cpassword:""
    })

    const handleInputs=(evt)=>{
        console.log(evt);
        setUser({...user,[evt.target.name]:evt.target.value})
    }


    // -------------------------------------Posting data from frontend to backend--------------------
    const PostData=async(evt)=>{
        evt.preventDefault()
        const{name,email,phone,work,password,cpassword} = user;
        const res = await fetch('/api/register',{
        // const res = await axios.get('/register',{
        /// ye vo route h backend wla..server side me
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,email,phone,work,password,cpassword
            })
        })

        const data = await res.json();
        if(res.status === 400 || !data)
        {
            window.alert("Error")
            console.log("Error")
        }
        else{
            console.log(data);
            window.alert("Registeration Succesfull")
            console.log("SUccess")

            navigate("/login") // ye client side wla h
        }
    }

// ---------------------------------------------------------------------------------------------


    return (
        <div>
            <section className="signup">
                <div className="container mt-5">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">SignUp</h2>
                            <form method="POST" className="register-form" id="register-form">
                                <div className="form-group">
                                    <label htmlFor="name">
                                        <i class="zmdi zmdi-account material-icons-name">
                                        </i>
                                    </label>
                                    <input type="text" name="name" id="name" autoComplete="off"
                                        value={user.name}
                                        onChange={handleInputs}
                                        placeholder="Your Name"

                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">
                                        <i class="zmdi zmdi-account material-icons-name">
                                        </i>
                                    </label>
                                    <input type="email" name="email" id="email" autoComplete="off"
                                        value={user.email}
                                        onChange={handleInputs}
                                        placeholder="Your email"

                                    />
                                </div>



                                <div className="form-group">
                                    <label htmlFor="phone">
                                        <i className="zmdi zmdi-email material-icons-name">
                                        </i>
                                    </label>
                                    <input type="number" name="phone" id="phone" autoComplete="off"
                                        value={user.phone}
                                        onChange={handleInputs}
                                        placeholder="Your phone"


                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="work">
                                        <i class="zmdi zmdi-account material-icons-name">
                                        </i>
                                    </label>
                                    <input type="text" name="work" id="work" autoComplete="off"
                                        value={user.work}
                                        onChange={handleInputs}
                                        placeholder="Your work"

                                    />
                                </div>


                                <div className="form-group">
                                    <label htmlFor="password">
                                        <i class="zmdi zmdi-account material-icons-name">
                                        </i>
                                    </label>
                                    <input type="password" name="password" id="password" autoComplete="off"
                                        value={user.password}
                                        onChange={handleInputs}
                                        placeholder="Your password"

                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="cpassword">
                                        <i class="zmdi zmdi-account material-icons-name">
                                        </i>
                                    </label>
                                    <input type="password" name="cpassword" id="cpassword" autoComplete="off"
                                        value={user.cpassword}
                                        onChange={handleInputs}
                                        placeholder="Confirm Password"

                                    />
                                </div>

                                <div className="form-group form-button">
                                    <input type="submit" name="signup" id="signup" className="form-submit" 
                                    value="register" onClick={PostData}/>
                                </div>

                                <NavLink to="/login" className="signup-image-link">I am already registered </NavLink>

                                
                            </form>
                        </div>
                    </div>   
                </div>
            </section>
        </div>
    )
}

export default SignUp;