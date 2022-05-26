import React from 'react'
import AdHome from '../../AdminPannel/Components/Pages/Home/AdHome'
import Sidebar from '../../AdminPannel/Components/Sidebar/Sidebar'
import Topbar from '../../AdminPannel/Components/Topbar/Topbar'
import './AdminPannel.css'


export default function AdminPannelHome() {
  return (
    <div>
        <Topbar/>
        <div className='container'>
            <Sidebar/>
            <AdHome/>
        </div>
        
    </div>
  )
}
