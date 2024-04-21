import { useState } from 'react';
import Logo from './assets/blue.png';
import Search from './assets/Search.png';
import MenuIcon from './assets/burger.png';

function NavBar({ setSearch }) {
  return (
    <nav>
      <div className='container fornav'>
        <img src={Logo} alt="Logo" className='logo' />
        <div className='topBtn'>
          <div className="search">
            <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder='Search for places here' />
            <img src={Search} alt="Search" className='SmallIcon' />
          </div>
          <img src={MenuIcon} alt="MenuIcon" />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
