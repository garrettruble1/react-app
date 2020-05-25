import React from 'react';
import './App.css';

const toDoList = [{
  id: 1,
  title: "Milk",
  description: "1 gallon of 2% milk",
  completed: false
},
{
  id: 2,
  title: "Eggs",
  description: "One dozen eggs",
  completed: false
},
{
  id: 3,
  title: "Butter",
  description: "One box of salted buttercream butter",
  completed: false
},
{
  id: 4,
  title: "Coffee",
  description: "One pound of ground Maxwell House coffee",
  completed: false
},
{
  id: 5,
  title: "Salt",
  description: "One cannister of Morton's Iodized salt",
  completed: false
}
]

const users = [
  {
    id: 0,
    firstName: "Sample",
    lastName: "User",
    avatar: "./ToDoProfile.jpg"
  },
  {
    id: 1,
    firstName: "Garrett",
    lastName: "Ruble",
    avatar: "./ToDoProfile.jpg"
  }
]

function App() {
  return (
    <>
    <div class="mainGrid">

      <div class="mainCol-1">

        <nav>
          <a href="#" class="navLink"><img src="./ToDoMockLogo.svg" alt="logo" class="logo" /></a>
          <ul class="navList">
          <li class="navItem"><a href="#" class="navLink"><i class="fas fa-plus-circle"></i> Add New List...</a></li>
            <li class="navItem"><a href="#" class="navLink">Groceries</a></li>
            <li class="navItem"><a href="#" class="navLink">Car Maintinence</a></li>
            <li class="navItem"><a href="#" class="navLink">Homework</a></li>
          </ul>
        </nav>

        <ul class="navList">
          {users.filter((user) => {
            return user.id == 1;
          }).map((user) => (
            <li class="userNavItem">
              <a href="#" class="userNavLink">
              <img src={user.avatar} alt="profile image" width="40"/>
              {user.firstName} {user.lastName}
              </a>
            </li>
          ))}
          </ul>

      </div>

      <div class="mainCol-2 contentFlex">

        <h1 class="pageHeader">To Do</h1>

        <div class="listContainer">
          <ul class="navList">
            <h2 class="listHeader">Groceries</h2>
            <li class="listItem listItemFlex"><button class="listItemText"><i class="fas fa-pen fa-sm icon"></i>Add Item...</button></li>
            {toDoList.map((item)=>(
              <li class="listItem listItemFlex">
                <button class="listItemText">
                  <i class="far fa-check-circle fa-lg icon"></i>
                  {item.title}
                  </button>
                  <button class="listItemMore">
                    <i class="fas fa-caret-down fa-lg icon"></i>
                    </button>
                  </li>
            ))}
            </ul>
        </div>

      </div>

    </div>
    </>
  );
}

export default App;
