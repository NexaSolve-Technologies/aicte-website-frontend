
import {Typography } from "@mui/material";
import React, { useState } from "react";
import styles from "./RecentTemplates.css";

const RecentTemplates = () => {
  const [templates, setTemplates] = useState([]);
  const [newTemplate, setNewTemplate] = useState('');

  const addTemplate = () => {
    if (newTemplate) {
      setTemplates([...templates, newTemplate]);
      setNewTemplate('');
    }
  };

  return (
    <div className={styles.container}>
      {templates.map((template, index) => (
        <div key={index} className={styles.templateBox}>
          <Typography>{template}</Typography>
        </div>
      ))}
      <div className={styles.addTemplateButton} onClick={addTemplate}>
        <Typography>Add Template</Typography>
      </div>
    </div>
  );
};

export default RecentTemplates;