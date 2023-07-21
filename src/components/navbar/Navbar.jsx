import React from 'react'
import './navbar.css'
import {Link} from "react-router-dom";
const Navbar = () => {
  return (
    <div>
        <div className='navbar'>
            <div className='navbox'>
                <Link className='navitem home' to="/">Home</Link>
                <Link className='navitem' to="/project">Project</Link>
                <Link className='navitem' to="/management">Management</Link>
                <Link className='navitem' to="/gd">Graphic Design</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar