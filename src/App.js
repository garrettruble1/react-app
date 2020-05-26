import React from 'react';
import './App.css';
import ToDo from './ToDo.js';
import NavBar from './NavBar.js';
import AccountLink from './AccLink.js';

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

        <NavBar />

        <AccountLink users={users} />

      </div>

      <div class="mainCol-2 contentFlex">

        <h1 class="pageHeader">To Do</h1>

        <ToDo list={toDoList} />

      </div>

    </div>
    </>
  );
}

export default App;
