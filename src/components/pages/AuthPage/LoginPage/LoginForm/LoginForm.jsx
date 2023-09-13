import React from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './LoginForm.css'

const LoginForm = () => {
    const Navigate = useNavigate();
    const handleClick = () => {
        Navigate('/userDashboard')
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic
    }
    return (
        <form onSubmit={handleSubmit}>
            <Typography variant="h4">Sign in</Typography>
            <Typography>
                If you don't have an account you can Register{' '}
                <Link to="/signup" style={{textDecoration : 'none', color : 'blue'}}>
                    You can Register Here
                </Link>
            </Typography>
            <TextField
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                margin="normal"
                required
            />
            <TextField 
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                required
            />
            <Button type="submit" variant="contained" color="primary" onClick={handleClick}>
                Login
            </Button>
        </form>
       );
};

export default LoginForm;