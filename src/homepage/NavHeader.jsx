import React from 'react'
import "./styles.css";
import { Link } from 'react-router-dom';

function NavHeader() {
    return (
        <nav className="navbar">
            <h4 className="compmay_name">DevLink Marketplace</h4>
            <ul className="nav_items">
                <li>
                    <a href="#">Find DEV</a>
                </li>
                <li>
                    <a href="#">Find Jobs</a>
                </li>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
                <li>
                <Link to='/signup'>Create Account</Link>
                </li>
            </ul>
        </nav>
    )
}
export default NavHeader;
