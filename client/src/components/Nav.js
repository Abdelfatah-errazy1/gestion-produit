import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="nav-bar">
        {/* <img src="./img/Logo.png" className="brand-name"  alt='' /> */}
        <Link to="#" className="hamburger">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </Link>
        <div className="menu-bar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/stocks/create">create produit</Link></li>
                
               
              
            </ul>
        </div>
    </nav>
   

  )
}

export default Nav