import React from 'react';
import './App.css';
import shortid from 'shortid';
import Dashboard from './Dashboard';
import ToDoList from './ToDoList';
import NavBar from './NavBar.js';
import AccountLink from './AccLink.js';
import { Switch, Route } from 'react-router-dom';
const TODO_LIST_KEY = 'myapp_todolist';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [
        {
          id: shortid.generate(),
          firstName: "Sample",
          lastName: "User",
          avatar: "./ToDoProfile.jpg"
        },
        {
          id: shortid.generate(),
          firstName: "Garrett",
          lastName: "Ruble",
          avatar: "./ToDoProfile.jpg"
        }
      ],
      newItem: "",
      modifiedItem: "",
      description: ""
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

      <Switch>

        <Route exact path="/">

          <Dashboard />

        </Route>

        <Route path="/groceries">

            <ToDoList />

        </Route>

      </Switch>
      </div>
    </div>
        
        
      </>
    )
  }
}

export default App;
