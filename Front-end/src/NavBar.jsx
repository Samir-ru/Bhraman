import { useState } from 'react'
import Logo from './assets/blue.png';
import Search from './assets/Search.png';
import MenuIcon from './assets/burger.png';
function NavBar() {
  const [count, setCount] = useState(0)

  return (
    <>
    <nav>
        <div className='container fornav'>
        <img src= {Logo} alt="Logo" className='logo' />
        <div className='topBtn'>
        <img src= {Search} alt="Search" className='SmallIcon' />
        <img src= {MenuIcon} alt="MenuIcon" />
        </div>
        
        </div>
    </nav>
    </>
  )
}

export default NavBar;
