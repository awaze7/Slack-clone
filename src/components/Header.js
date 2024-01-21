import React from 'react'
import '../styles/Header.css'
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import  HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { useStateValue } from './StateProvider';

function Header() {
  const [{user}] = useStateValue();
  return (
    <div className='header'>
        <div className="header_left">
          <Avatar
            className="header_avatar"
            alt={user?.displayName}
            src={user?.photoURL}
          />
          <AccessTimeIcon />
        </div>

        <div className="header_mid">
            <SearchIcon />
            <input placeholder="Search Wise Programmer" />  
        </div>

        <div className="header_right">
            <HelpOutlineIcon />
        </div>

    </div>
  )
}

export default Header
