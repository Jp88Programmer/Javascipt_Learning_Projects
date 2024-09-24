import React from "react";
import { useLocation,NavLink } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    return(
        <div className='navbar'>
            <ul className='list'>
                <li className='a'><NavLink to='/'className={location.pathname === '/' ? 'active-link' : ''} >Home</NavLink></li>
                <li className='a'><NavLink to='/engineering' className={location.pathname === '/engineering' ? 'active-link' : ''} >Engineering</NavLink></li>
                <li className='a'><NavLink to='/medical' className={location.pathname === '/medical' ? 'active-link' : ''} >Medical</NavLink></li>
                <li className='a'><NavLink to='/finance' className={location.pathname === '/finance' ? 'active-link' : ''} >Finance</NavLink></li>
                <li className='a'><NavLink to='/about' className={location.pathname === '/about' ? 'active-link' : ''} >About</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar;