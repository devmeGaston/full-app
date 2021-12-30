import React from 'react'
import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import './home.css'
const home = () => {
    return (
        <div className='home'>
           <FeaturedInfo/> 
           <Chart title="Sales per month"/>
           <Chart title="Product sold by type"/>
        </div>
    )
}

export default home
