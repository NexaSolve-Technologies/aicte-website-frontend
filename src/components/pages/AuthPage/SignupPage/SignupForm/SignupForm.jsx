import React, {useState} from "react";
import { TextField, Button, Typography, Container } from "@mui/material";
import './SignupForm.css'

const SignupForm = () => {
    const [formData, setFormData] = useState({
        email : '',
        password : '',
        confirmPassword : ''
    });
    
    const handleChange = (e) => {
        const { name , value} = e.target;
        setFormData({
            ...formData,
            [name] : value
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to send my data to the Backend Server.
    }
    return (
        
            <form onSubmit={handleSubmit} >
            <Typography variant="h4" className="signup-heading">SignUp Form</Typography>
                <TextField 
                    name="email"
                    label="Email"
                    type="email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    required
                    onChange={handleChange}
                />
                <TextField 
                    name="password"
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    required
                    onChange={handleChange}
                />
                <TextField 
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    required
                    onChange={handleChange}
                />
                <Button type="submit" variant="contained" color="primary">
                    Sign Up
                </Button>
            </form>
    );
};
export default SignupForm;