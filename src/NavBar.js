import React from 'react';

function NavBar () {
    return (
        <nav>
          <a href="#" class="navLink"><img src="./ToDoMockLogo.svg" alt="logo" class="logo" /></a>
          <ul class="navList">
          <li class="navItem"><a href="#" class="navLink"><i class="fas fa-plus-circle"></i> Add New List...</a></li>
            <li class="navItem"><a href="#" class="navLink">Groceries</a></li>
            <li class="navItem"><a href="#" class="navLink">Car Maintinence</a></li>
            <li class="navItem"><a href="#" class="navLink">Homework</a></li>
          </ul>
        </nav>
    )
}

export default NavBar;