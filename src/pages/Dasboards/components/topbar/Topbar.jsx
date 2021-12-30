import React from 'react';
 import "./topbar.css";
 import logo from '../../../../images/logo.png';
 import me from '../../../../images/ghassen.jpg'
 import { NotificationsNone, Settings } from '@material-ui/icons/';
const Topbar = () => {
    return (
        <div className='topbar'> 
        <div className="topbarWrapper">
            <div className="topLeft">
            <img src={logo} alt="" className="logo" />
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
               <NotificationsNone/>
               <Settings/>
               <img src={me} alt="" className="topAvatar" />
                </div>
            </div>
        </div>
        </div>
    )
}

export default Topbar
