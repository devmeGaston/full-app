import React from 'react'
import './sidebar.css'
import {LineStyle, Timeline, TrendingUp, Person, Storefront, AttachMoney,
     MailOutline, DynamicFeed, ChatBubbleOutline} from '@material-ui/icons/';
const Sidebar = () => {
    return (
        <div className='sidebar'> 
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                        <LineStyle className='sidebarIcon'/>Home
                        </li>
                        <li className="sidebarListItem">
                        <Timeline className='sidebarIcon'/>Analytics
                        </li>
                        <li className="sidebarListItem">
                        <TrendingUp className='sidebarIcon'/>Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                        <Person className='sidebarIcon'/>Employee
                        </li>
                        <li className="sidebarListItem">
                        <Storefront className='sidebarIcon'/>Products
                        </li>
                        <li className="sidebarListItem">
                        <AttachMoney className='sidebarIcon'/>Transactions
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                        <MailOutline className='sidebarIcon'/>Mail
                        </li>
                        <li className="sidebarListItem">
                        <DynamicFeed className='sidebarIcon'/>Analytics
                        </li>
                        <li className="sidebarListItem">
                        <ChatBubbleOutline className='sidebarIcon'/>Messages
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
