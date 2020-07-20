import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {

  const logo = {
    width: '80%',
    padding: '2em 1em'
  }

  const navList = {
    margin: '0',
    padding: '0'
  }

  const navLink = {
    display: 'block',
    textDecoration: 'none',
    padding: '1em',
    color: 'black',
    fontSize: 'x-large',
    alignContent: 'center',
    justifyContent: 'center'
  }

  const navItem = {
    listStyleType: 'none',
    borderTop: '1px solid black'
  }

    return (
        <nav>
          <Link to="/" style={navLink}><img src="./ToDoMockLogo.svg" alt="logo" style={logo} /></Link>
          <ul style={navList}>
          <li style={navItem}><Link to="/" style={navLink}><i className="fas fa-plus-circle"></i> Add New List...</Link></li>
            <li style={navItem}><Link to="/groceries" style={navLink}>Groceries</Link></li>
            <li style={navItem}><Link to="/" style={navLink}>Car Maintinence</Link></li>
            <li style={navItem}><Link to="/" style={navLink}>Homework</Link></li>
          </ul>
        </nav>
    )
}

export default NavBar;