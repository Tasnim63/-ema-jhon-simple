import './Header.css';
import React from 'react';
import logo from '../../../src/images/Logo.svg';

const Header = () => {
    return (
        <>
            <nav className='navbar'>
                <img src={logo} alt="" />
                <ul className="nav  justify-content-end me-5">
                    <li className="nav-item">
                        <a className="nav-link text-light" href="#">Order</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light" href="#">Order Review</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light" href="#">Manage Inventory</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light" href="#">About</a>
                    </li>

                </ul>
            </nav>

        </>

    );
};

export default Header;