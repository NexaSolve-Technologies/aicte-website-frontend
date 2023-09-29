import React from 'react';
import List from '@mui/material/List';
import Profile from './Profile/Profile'
import Message from './Message/Message'
import CurriculumDesigner from './CurriculumDesigner/CurriculumDesigner'
import RecentTemplates from './RecentTemplates/RecentTemplates'
import ResourceRepositery from './ResourceRepositery/ResourceRepositery'
import ConductMeet from './ConductMeet/ConductMeet'
import Settings from './Settings/Settings'
import Logout from './Logout/Logout'
import './Sidebar.css'

const SideBar = () => {
  return (
    <div className='sidebar-container'>
    <List>
      <Profile />
      <Message />
      <CurriculumDesigner />
      <RecentTemplates />
      <ResourceRepositery />
      <ConductMeet />
      <div className='sidebar-downpart'>
      <Settings />
      <Logout />
      </div>
    </List>
    </div>
  );
};

export default SideBar;
