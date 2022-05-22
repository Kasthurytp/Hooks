import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useStatevalue } from '../Subtotal/StateProvider';
import { auth } from '../../firebase';


export default function Header() {

  const [{basket, user}, dispatch] = useStatevalue();

  const handleAuthentication = () => {
    if(user) {
      auth.signOut();
    }
  }

  return (
    <div className='navBar'>
          <div className='header'>
            {/* top nav bar */}
              <div className='left'>
                    <Link to="/" className='logo'>Logo</Link>
                    <a className="seller">Seller</a>
                    <a className="user">User</a>
              </div>
            {/* search bar */}
              <div className='search'>
                      <input className='searchInput' type="text"/>
                      <SearchIcon className='searchIcon'/>
              </div>
            {/* search bar end */}
            {/* header nav */}
              <div className='headerNav'>
                <Link to={!user && '/login'}>
                    <div onClick={handleAuthentication} className='headerOption'>
                        <span className='optionLine1'>Hello {!user ? 'Guest' : user.email}</span>
                        <span className='optionLine2'>{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                <Link to='/orders'>
                  <div className='headerOption'>
                      <span className='optionLine1'>Returns</span>
                      <span className='optionLine2'>Orders</span>
                  </div>
                </Link>

                  <div className='headerOption'>
                      <span className='optionLine1'>Your</span>
                      <span className='optionLine2'>Account</span>
                  </div>`
               </div>
           </div>
          {/* header nav end */}

          {/* second nav bar */}
          <div className='seconNav'>
            <div className='left'>
              <MenuIcon className='menuIcon'/>
            </div>
            <div className='right'>
              <Link to='/checkout'><ShoppingCartIcon className='ShoppingCartIcon'/></Link>
              <span className='shoppingCartCount'>{basket?.length}</span>
              <NotificationsIcon className='NotificationsIcon'/>
              <span className='notificationCount'>0</span>
            </div>
          </div>
          {/* second nav bar */}
    </div>
  )
}
