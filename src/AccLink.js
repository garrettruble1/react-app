import React from 'react';

function AccountLink (props) {
    return (
        <ul className="navList">
        {props.users.filter((user) => {
          return user.id == 1;
        }).map((user) => (
          <li class="userNavItem">
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