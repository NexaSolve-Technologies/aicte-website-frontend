import { Box,Typography ,Button ,Grid ,Paper} from "@mui/material";
import React,{useState} from "react";
import "./RecentTemplates.css";

const useStyles = makeStyles((theme) => ({
}));

const RecentTemplates = () =>{
    const classes = useStyles();
    const [templates, setTemplates] = useState([]);
    const [newTemplate, setNewTemplate] = useState("");
    
    const handleAddTemplate = () => {
        if (newTemplate) {
          setTemplates([...templates, newTemplate]);
          setNewTemplate("");
        }
    };

    
    return (
        <Box className={classes.container}>
      <Typography variant="h5">Recent Templates</Typography>
      <Box>
        <Grid container spacing={2}>
          {templates.map((template, index) => (
            <Grid item xs={6} sm={3} key={index}>
              <Paper className={classes.templateBox}>{template}</Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box className="inputContainer">
        <input
          type="text"
          className="inputField"
          placeholder="Enter template text"
          value={newTemplate}
          onChange={(e) => setNewTemplate(e.target.value)}
        />
        <Button
          variant="contained"
          color="secondary"
          className="addButton"
          onClick={handleAddTemplate}
        >
          Add Template
        </Button>
      </Box>
    </Box>
    );
};

export default RecentTemplates;