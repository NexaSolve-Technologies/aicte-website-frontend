import React from "react";
import Navbar from "./Navbar/Navbar";
import SignupForm from "./SignupForm/SignupForm";
import './SignupPage.css';


const SignupPage = () => {
    return (
        <div>
            <div className="Navbar">
                <Navbar />
            </div>
            <div className="BackGround">
                <div className="signup-container">
                    <SignupForm />
                </div>
            </div>
        </div>
    );
};
export default SignupPage;