import React from 'react'
import User from '../../AdminPannel/Components/Pages/User/User'
import Sidebar from '../../AdminPannel/Components/Sidebar/Sidebar'
import Topbar from '../../AdminPannel/Components/Topbar/Topbar'
import './AdminPannel.css'


export default function AdminPannelHome() {
  return (
    <div>
        <Topbar/>
        <div className='container'>
            <Sidebar/>
            <User/>
        </div>
        
    </div>
  )
}
