import React from "react";
import { NavLink } from "react-router-dom";


const Contact =() => {
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
                                        placeholder="Your email"

                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="name">
                                        <i class="zmdi zmdi-account material-icons-name">
                                        </i>
                                    </label>
                                    <input type="text" name="name" id="name" autoComplete="off"
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