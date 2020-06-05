import React from 'react';

function NavBar () {
    return (
        <nav>
          <a href="#" className="navLink"><img src="./ToDoMockLogo.svg" alt="logo" class="logo" /></a>
          <ul className="navList">
          <li className="navItem"><a href="#" className="navLink"><i className="fas fa-plus-circle"></i> Add New List...</a></li>
            <li className="navItem"><a href="#" className="navLink">Groceries</a></li>
            <li className="navItem"><a href="#" className="navLink">Car Maintinence</a></li>
            <li className="navItem"><a href="#" className="navLink">Homework</a></li>
          </ul>
        </nav>
    )
}

export default NavBar;