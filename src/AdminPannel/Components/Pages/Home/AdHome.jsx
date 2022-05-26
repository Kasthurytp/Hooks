import React from 'react'
import Chart from '../../Chart/Chart'
import FeaturedInfo from '../../FeaturedInfo/FeaturedInfo'
import { userData } from '../../UserData/UserData'
import './AdHome.css'


export default function AdHome() {
  return (
    <div className='AdHome'>
      <FeaturedInfo/>
      <Chart data={userData} title="Sales Analytics" grid dataKey = "uv"/>
      <div className='homeWidgets'></div>
    </div>
  )
}
