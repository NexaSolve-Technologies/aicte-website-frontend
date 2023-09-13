import React from "react";
import {Paper,Typography} from "@mui/material";
const Statistics = () =>{
    const StyleConte = {
        // csss here
    };

    const DataStats = [
        {
            label: "student", value :"5000"
        },
        {
            label: "courses", value :"5000"
        },
        {
            label: "assignments", value :"5000"
        },
        // {
        //     label: "quizzes", value :"5000"
        // },
        {
            label: "exams", value :"5000"
        },
        {
            label: "submissions", value :"5000"
        },
        {
            label: "teachers", value :"5000"
        },
        {
            label: "admins", value :"5000"
        },
    ];
    return(
        <Paper sx ={StyleConte} elevation={3}>
            <Typography variant="h6">
                Statistics
            </Typography>
            <ul>
                {DataStats.map((item,index) =>(
                    <li key={index}>
                        <Typography variant="section1">
                            {index+1}
                            &nbsp; &nbsp;&nbsp;<span>{item.label}</span>&nbsp;:
                        </Typography>
                        <Typography variant="body1">
                            {item.label} : {item.value}
                        </Typography>
                    </li>
                ))}
            </ul>
        </Paper>
    );
};

export default Statistics;