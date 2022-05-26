import React from 'react'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import './FeaturedInfo.css'

export default function FeaturedInfo() {
  return (
    <div className='featured'> 
      <div className='featuredItem'>
          <span className="featuredTitle">Revanue</span>
          <div className="featuredMoneyContainer">
              <span className="featuredMoney">$200</span>
              <span className="featuredMoneyRate">-200<ArrowDownwardIcon className='featuredIcon negative'/></span>
          </div>
          <span className="featuredSub">Compared to last month</span>    
      </div>

      <div className='featuredItem'>
          <span className="featuredTitle">Sales</span>
          <div className="featuredMoneyContainer">
              <span className="featuredMoney">$1400</span>
              <span className="featuredMoneyRate">-200<ArrowDownwardIcon className='featuredIcon negative'/></span>
          </div>
          <span className="featuredSub">Compared to last month</span>    
      </div>

      <div className='featuredItem'>
          <span className="featuredTitle">Cost</span>
          <div className="featuredMoneyContainer">
              <span className="featuredMoney">$220</span>
              <span className="featuredMoneyRate">+200<ArrowUpwardIcon className='featuredIcon'/></span>
          </div>
          <span className="featuredSub">Compared to last month</span>    
      </div>
    </div>
  )
}

