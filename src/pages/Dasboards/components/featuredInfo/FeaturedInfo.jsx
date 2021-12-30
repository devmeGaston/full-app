import React from 'react';
import "./featuredInfo.css";
import {ArrowDownward, ArrowUpward} from "@material-ui/icons"
const FeaturedInfo = (sales, expenses) => {
    return (
        <div className='featured'>
            <div className='featuredItem'>
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2.415</span>
                    <span className="featuredMoneyRate">-11.4 <ArrowDownward/></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className='featuredItem'>
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$4.450</span>
                    <span className="featuredMoneyRate">-1.4 <ArrowDownward/></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className='featuredItem'>
                <span className="featuredTitle">Expenses</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2.225</span>
                    <span className="featuredMoneyRate">1.5 <ArrowUpward/></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
        </div>
    )
}

export default FeaturedInfo
