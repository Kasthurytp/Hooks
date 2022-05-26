import React from 'react'
import './Topbar.css'
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className='tobBar'>
      <div className="topBarWrapper">
          <div className="topLeft">
            <Link to='/' style={{ textDecoration: 'none' }}>
              <span className="logoAdmin">Hooks</span>
              </Link>
          </div>
          <div className="topRight">
            <div className="topBarIconContainer">
              <NotificationsIcon className='notificationIcon'/>
              <span className="topIconBadge">2</span>
            </div>
            <div className="topBarIconContainer">
              <SettingsIcon/>
            </div>
            <img src='https://res.cloudinary.com/do9kzlzo0/image/upload/v1652463206/Hooks/pexels-pixabay-219794_hhr9ow.jpg' className='topAvatar'/>
          </div>
      </div>
    </div>
  )
}

