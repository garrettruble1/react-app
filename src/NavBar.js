import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
          <Link to="/" className="navLink"><img src="./ToDoMockLogo.svg" alt="logo" className="logo" /></Link>
          <ul className="navList">
          <li className="navItem"><Link to="/" className="navLink"><i className="fas fa-plus-circle"></i> Add New List...</Link></li>
            <li className="navItem"><Link to="/groceries" className="navLink">Groceries</Link></li>
            <li className="navItem"><Link to="/" className="navLink">Car Maintinence</Link></li>
            <li className="navItem"><Link to="/" className="navLink">Homework</Link></li>
          </ul>
        </nav>
    )
}

export default NavBar;