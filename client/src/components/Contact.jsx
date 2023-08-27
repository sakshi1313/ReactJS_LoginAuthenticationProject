import React ,{useEffect, useState} from "react";
import { NavLink } from "react-router-dom";


const Contact =() => {

    const [userData, setUserData] = useState({})


    const ContactPage = async() => {
        try{
            console.log("contact page");

            const res = await fetch('/api/contact',{
                method: "GET",
                headers: {
                    "Content-Type":"application/json"
                },

            }) // backend se response milta h

            const data = await res.json(); 
            /// ye data aapke server ,me jo route h jo fetch ho rhe(get)...wha se jo res.send h...vo aa rha h
            console.log(data);
            setUserData(data);

            if(!res.status === 200)
            {
                // authentication failed
                const error = new Error(res.error)
                throw error;
            }
        }
        catch(err)
        {
            console.log(err)
            navigate('/login')
        }
    }

    useEffect(() => {
        ContactPage();
    },[]);










































    return (
        <div>
            <section className="signup">
                <div className="container mt-5">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">Get In touch</h2>
                            <form className="register-form" id="register-form">
                                
                                <div className="form-group">
                                    <label htmlFor="email">
                                        <i class="zmdi zmdi-account material-icons-name">
                                        </i>
                                    </label>
                                    <input type="email" name="email" id="email" autoComplete="off"
                                        value={userData.email}
                                        placeholder="Your email"

                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="name">
                                        <i class="zmdi zmdi-account material-icons-name">
                                        </i>
                                    </label>
                                    <input type="text" name="name" id="name" autoComplete="off"
                                        value={userData.name}
                                        placeholder="name"

                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">
                                        <i class="zmdi zmdi-account material-icons-name">
                                        </i>
                                    </label>
                                    <input type="text" name="message" id="message" autoComplete="off"
                                        placeholder="message"

                                    />
                                </div>




                                <div className="form-group form-button">
                                    <input type="submit" name="send" id="send" className="form-submit" 
                                    value="send"/>
                                </div>

                                <NavLink to="/home" className="signup-image-link">back</NavLink>

                                
                            </form>
                        </div>
                    </div>   
                </div>
            </section>
        </div>
    )
}

export default Contact;