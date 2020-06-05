import React from 'react';
import './App.css';
import shortid from 'shortid';
import ToDo from './ToDo.js';
import NavBar from './NavBar.js';
import AccountLink from './AccLink.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      toDoList: [
        {
          id: shortid.generate(),
          title: "Milk",
          description: "1 gallon of 2% milk",
          completed: false,
          isOpen: false
        },
        {
          id: shortid.generate(),
          title: "Eggs",
          description: "One dozen eggs",
          completed: false,
          isOpen: false
        },
        {
          id: shortid.generate(),
          title: "Butter",
          description: "One box of salted buttercream butter",
          completed: false,
          isOpen: false
        },
        {
          id: shortid.generate(),
          title: "Coffee",
          description: "One pound of ground Maxwell House coffee",
          completed: false,
          isOpen: false
        },
        {
          id: shortid.generate(),
          title: "Salt",
          description: "One cannister of Morton's Iodized salt",
          completed: false,
          isOpen: false
        }
      ],
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

  handleAddItemInput = (event) => {
    this.setState({ newItem: event.target.value });
  }

  handleAddItemClick = () => {
    let newToDo = {
      id: shortid.generate(),
      title: this.state.newItem,
      description: "",
      completed: false,
      isOpen: false
    }

    this.setState((state) => {
      if (this.state.newItem !== "") {
        return {
         toDoList: [ newToDo, ...state.toDoList ],
         newItem: "",
        };
      }
    })
  }

  handleAddItemKeyPress = (e) => {
    if (e.keyCode === 13) {
      let newToDo = {
        id: shortid.generate(),
        title: this.state.newItem,
        description: "",
        completed: false,
        isOpen: false
      }

      this.setState((state) => {
        if (this.state.newItem !== "") {
          return {
           toDoList: [ newToDo, ...state.toDoList ],
           newItem: "",
          };
        }
      });
    };
  }

  handleCheckInput = (id) => {
    this.setState((state) => {
      const newToDo = state.toDoList.map((item) => {
        if (item.id === id) {
          return Object.assign({}, item, { completed: true });
        } else {
          return item;
        }
      });

      return {
        toDoList: newToDo
      };
    });
  }

  handleToggleEditMenu = (id) => {
    this.setState((state) => {
        const newToDo = state.toDoList.map(item => {
          if (item.id === id) {
            return Object.assign({}, item, { isOpen: item.isOpen ? false : true });
          } else {
            return item;
          }
        });
        return {
          toDoList: newToDo,
          modifiedItem: ""
        };
      });
    }

    handleModifyItemInput = (event) => {
      this.setState({ modifiedItem: event.target.value });
    }

    handleModifyDescription = (event) => {
      this.setState({ description: event.target.value });
    }

    handleSaveChangeClick = (id) => {
      this.setState((state) => {
        const newToDo = state.toDoList.map(item => {
          if (item.id === id && this.state.modifiedItem !== "") {
            return Object.assign({}, item, { title: this.state.modifiedItem });
          } else {
            return item;
          }
        });
        return {
          toDoList: newToDo,
          modifiedItem: ""
        }
      });
    }

    handleDeleteItem = (id) => {
      this.setState((state) => {
        let newToDo = state.toDoList.filter((item) => {
          if (item.id === id) {
            return item.id !== id;
          } else {
            return item;
          }
        });
        return {
          toDoList: newToDo
        }
      });
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

            <ToDo list={this.state.toDoList}
            newItem={this.state.newItem}
            modifiedItem={this.state.modifiedItem}
            inputHandler={this.handleAddItemInput}
            clickHandler={this.handleAddItemClick}
            enterHandler={this.handleAddItemKeyPress}
            onCheck={this.handleCheckInput}
            onEditClick={this.handleToggleEditMenu}
            onModifyItem={this.handleModifyItemInput}
            onModifyDesc={this.handleModifyDescription}
            onDelete={this.handleDeleteItem}
            modifyName={this.state.modifiedItem}
            modifyDesc={this.state.description}
            onSaveChange={this.handleSaveChangeClick}
            onDelete={this.handleDeleteItem} />

          </div>

        </div>
      </>
    )
  }
}

export default App;
