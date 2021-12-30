import React from 'react'
import './adashboard.css'
import EmployeeList from './adminPages/Employee/EmployeeList'
import Home from './adminPages/home/Home'
import Sidebar from './components/sidebar/Sidebar'
import Topbar from './components/topbar/Topbar'

const Adashboard = () => {
    return (
        <div>
            <Topbar/>
            <div className="container">
                <Sidebar/>
                <EmployeeList/>
            </div>
        </div>
    )
}

export default Adashboard
