import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <div className="nav-link">
                        <Link path="/">Home</Link>
                    </div>
                </li>

            </ul>
        </nav>
    )
}
export default Header;