import React from 'react'
import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import StoreIcon from '@mui/icons-material/Store';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PortraitIcon from '@mui/icons-material/Portrait';
import LogoutIcon from '@mui/icons-material/Logout';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { Link } from "react-router-dom";



const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="top">
        <Link to='/' style={{textDecoration: "none"}}>
          <span className="logo">Bin Hlaig Group</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className='title'>Main</p>

          <li>
            <DashboardIcon className='icon' />
            <span>Dashboard</span>
          </li>
          <p className='title'>List</p>
          <Link to='/users' style={{textDecoration: "none"}}>
          <li>
            <PersonIcon className='icon' />
            <span>Users</span>
          </li>

          </Link>
          <li>
            <StoreIcon className='icon' />
            <span>Product</span>
          </li>
          <li>
            <CreditCardIcon className='icon' />

            <span>Order</span>
          </li>
          <li>
            <LocalShippingIcon className='icon' />
            <span>Delivery</span>
          </li>
          <p className='title'>Useful</p>
          <li>
            <NotificationsNoneIcon className='icon' />
            <span>Notification</span>
          </li>
          <p className='title'>User</p>
          <li>
            <PortraitIcon className='icon' />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className='icon' />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className='colorOption'></div>
        <div className='colorOption'></div>

      </div>
    </div>
  )
}

export default Sidebar
