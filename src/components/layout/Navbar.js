import React from 'react'
import { Link } from 'react-router-dom';

 const Navbar = () => {
    return (
        <nav className="navbar bg-dark">
        <h1>
            <Link to="index"><i className="fas fa-code"></i> Dev Connector</Link>
        </h1>
        <ul>
            <li><Link to="#">Developers</Link></li>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>
    </nav> 
    )
}

export default Navbar;
