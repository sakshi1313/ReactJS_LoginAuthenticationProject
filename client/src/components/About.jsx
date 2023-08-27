import React, { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

const About =() => {
    const navigate = useNavigate();

    const [userData, setUserData] = useState({})


    const AboutPage = async() => {
        try{
            console.log("about pahge");

            const res = await fetch('/api/about',{
                method: "GET",
                headers: {
                    Accept:"application/json",
                    "Content-Type":"application/json"
                },
                credentials:"include" // cookie client se server me bhejne ke liye

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
        AboutPage();
    },[]);



    return (
        <div className="container emp-profile">
            <form method ="GET">

                <div className="row">
                    <div className="col-md-4">
                        {/* <img src={} /> */}
                    </div>

                    <div className="col-md-6">
                        <div className="profile-head">
                            <h5>{userData.name}</h5>
                            <h6>{userData.work}</h6>
                            <p className="profile-rating mt-3 mb-5">RANKINGS: <span> 10/10 </span></p>

                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" >About</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link active" id="profile-tab" data-toggle="tab" href="#profile" role="tab" >TimeLine</a>
                                </li>

                            </ul>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <input type="submit" className="profile-edit-btn" name="edit" value="edit"/>
                     </div>  


                    <div className="col-md-8 pl-5 about-info">
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>UserID</label>
                                    </div>

                                    <div className="col-md-6">
                                        <p>{userData._id}</p>
                                    </div>


                                    <div className="col-md-6">
                                        <label>Name</label>
                                    </div>

                                    <div className="col-md-6">
                                        <p>{userData.name}</p>
                                    </div>

                                    <div className="col-md-6">
                                        <label>email</label>
                                    </div>

                                    <div className="col-md-6">
                                        <p>{userData.email}</p>
                                    </div>

                                    <div className="col-md-6">
                                        <label>Phone</label>
                                    </div>

                                    <div className="col-md-6">
                                        <p>{userData.phone}</p>
                                    </div>



                                </div>
                        </div>
                    </div>    




                </div>

                </div>
            </form>
            
        </div>
    )
}

export default About;