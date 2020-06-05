import React from 'react';
import './App.css';
import ToDo from './ToDo.js';
import NavBar from './NavBar.js';
import AccountLink from './AccLink.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      toDoList: [
        {
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
      ],
      users: [
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
    }
  }

  render() {
    return (
      <>
        <div className="mainGrid">

          <div className="mainCol-1">

            <NavBar />

            <AccountLink users={this.state.users} />

          </div>

          <div className="mainCol-2 contentFlex">

            <h1 className="pageHeader">To Do</h1>

            <ToDo list={this.state.toDoList} />

          </div>

        </div>
      </>
    )
  }
}

export default App;
