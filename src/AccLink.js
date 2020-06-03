import React from 'react';

function AccountLink (props) {
    return (
        <ul className="navList">
        {props.users.filter((user) => {
          return user.firstName === "Garrett";
        }).map((user) => (
          <li className="userNavItem">
            <a href="#" className="userNavLink">
            <img src={user.avatar} alt="profile image" width="40"/>
            {user.firstName} {user.lastName}
            </a>
          </li>
        ))}
        </ul>
    )
}

export default AccountLink;