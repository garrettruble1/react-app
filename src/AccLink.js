import React from 'react';

function AccountLink (props) {

  const navList = {
    margin: '0',
    padding: '0'
  }

  const userNavItem = {
    listStyleType: 'none',
    borderTop: '1px solid black'
  }

  const userNavLink = {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    textDecoration: 'none',
    padding: '1em',
    color: 'black',
    fontSize: 'x-large'
  }

    return (
        <ul style={navList}>
        {props.users.filter((user) => {
          return user.firstName === "Garrett";
        }).map((user) => (
          <li style={userNavItem}>
            <a href="#" style={userNavLink}>
            <img src={user.avatar} alt="profile image" width="40"/>
            {user.firstName} {user.lastName}
            </a>
          </li>
        ))}
        </ul>
    )
}

export default AccountLink;