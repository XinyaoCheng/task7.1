import React from 'react'
import "./styles.css";
import { Link } from 'react-router-dom';

function NavHeader() {
    return (
        <nav className="navbar">
            <h4 className="compmay_name">DevLink Marketplace</h4>
            <ul className="nav_items">
                <li>
                    <Link to='/finddevs'>Find DEV</Link>
                </li>
                <li>
                    <Link to='/findjobs'>Find Jobs</Link>
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
