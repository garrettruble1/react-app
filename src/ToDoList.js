import React from 'react';
import './App.css';
import shortid from 'shortid';
import MoreInfo from './MoreInfo.js';
import { withRouter } from 'react-router-dom';
const TODO_LIST_KEY = 'myapp_todolist';

class ToDoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      toDoList: [
        {
          id: shortid.generate(),
          title: "Milk",
          description: "1 gallon of 2% milk",
          due: "",
          completed: false,
          isOpen: false
        },
        {
          id: shortid.generate(),
          title: "Eggs",
          description: "One dozen eggs",
          due: "",
          completed: false,
          isOpen: false
        },
        {
          id: shortid.generate(),
          title: "Butter",
          description: "One box of salted buttercream butter",
          due: "",
          completed: false,
          isOpen: false
        },
        {
          id: shortid.generate(),
          title: "Coffee",
          description: "One pound of ground Maxwell House coffee",
          due: "",
          completed: false,
          isOpen: false
        },
        {
          id: shortid.generate(),
          title: "Salt",
          description: "One cannister of Morton's Iodized salt",
          due: "",
          completed: false,
          isOpen: false
        }
      ],
      newItem: ""
    }
  }

  componentDidMount() {
    let listString = localStorage.getItem(TODO_LIST_KEY);
    if (listString) {
      this.setState({
        toDoList: JSON.parse(listString)
      });
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.toDoList !== prevState.toDoList) {
      localStorage.setItem(TODO_LIST_KEY, JSON.stringify(this.state.toDoList));
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
      due: "",
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
          return Object.assign({}, item, { completed: item.completed ? false : true });
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

    updateItemData = (formData) => {
        this.setState((state) => {
            const newToDo = state.toDoList.map((item) => {
              if (item.id === formData.id) {
                return {...formData};
              } else {
                return item;
              }
            });
            return {
              toDoList: newToDo,
            }
          });
    }

    handleEditFormSubmit = (event, id) => {
        event.preventDefault();
        this.updateItemData(id);
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

    const pageHeader = {
      display: 'flex',
      justifyContent: 'center',
      fontWeight: 'bold',
      margin: '0',
      marginBottom: '3em',
      padding: '0.5em'
    }

    const listContainer = {
      marginBottom: '1em',
      display: 'flex',
      flexDirection: 'column',
      width: '24em',
      gridColumnStart: '5',
      gridColumnEnd: '8',
      boxShadow: '0px 5px 5px gray',
      borderRadius: '5px'
    }

    const listHeader = {
      margin: '0',
      padding: '1em',
      textAlign: 'center',
      backgroundColor: 'black',
      color: 'white',
      borderRadius: '10px 10px 0 0'
    }

    const navList = {
      margin: '0',
      padding: '0'
    }

    const listItem = {
      listStyleType: 'none',
      borderTop: '1px solid grey'
    }

    const listItemFlex = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }

    const addToList = {
      width: '60%',
      fontSize: '15px',
      padding: '15px',
      border: 'none'
    }

    const listItemMore = {
      padding: '1em',
      display: 'block',
      fontSize: '100%',
      fontFamily: 'inherit',
      background: 'none',
      border: 'none',
      outline: 'none',
      cursor: 'pointer'
    }

    const listItemColumn = {
      display: 'flex',
      flexDirection: 'column'
    }

    const listItemText = {
      display: 'flex',
      justifyContent: 'flex-start',
      width: '100%',
      padding: '1em',
      fontSize: '100%',
      fontFamily: 'inherit',
      background: 'none',
      border: 'none',
      outline: 'none'
    }

    const customCheckLabel = {
      marginRight: '1em',
      height: '24px',
      width: '24px',
      backgroundColor: 'transparent',
      borderRadius: '5px',
      border: '1px solid black',
      cursor: 'pointer'
    }

    const checkmark = {
      opacity: '0',
      cursor: 'pointer'
    }

    return (
      <>

            <h1 style={pageHeader}>To Do</h1>

            <div style={listContainer}>
          <ul style={navList}>
            <h2 style={listHeader}>Groceries</h2>
            <li style={listItem, listItemFlex}><input type="text" style={addToList} placeholder="Add new item..." value={this.state.newItem} onChange={this.handleAddItemInput} onKeyDown={this.handleAddItemKeyPress}></input><button style={listItemMore} onClick={this.handleAddItemClick}><i className="fas fa-plus-circle icon"></i>Add</button></li>

            {this.state.toDoList.map((item)=>(
              <li style={listItem} key={item.id}>

                <div style={listItemColumn}>
                <div style={listItemFlex}>
                <button style={listItemText}>
                  <label style={customCheckLabel}>
                <input type="checkbox" defaultChecked={item.completed} onChange={(id) => this.handleCheckInput(item.id)} style={checkmark} />
                <span className={item.completed ? "customCheckmark" : "menuHidden"}></span>
                </label>
                  {item.title}
                  </button>
                  <button className={item.completed ? "listItemMore" : "menuHidden"} onClick={(id) => this.handleDeleteItem(item.id)}>
                  <i class="fas fa-trash"></i>
                  </button>
                  <button style={listItemMore} onClick={() => this.handleToggleEditMenu(item.id)}>
                  <i className="fas fa-chevron-down"></i>
                    </button>
                    </div>

                    <div className={item.isOpen ? "menuOpen" : "menuHidden"}>
                    <MoreInfo list={this.state.toDoList}
                    id={item.id}
                    itemName={item.title}
                    itemDesc={item.description}
                    due={item.due}
                    checked={item.completed}
                    onUpdateData={this.updateItemData}
                    onDeleteItem={this.handleDeleteItem} />
                    </div>
                    </div>

                  </li>
            ))}
            </ul>
        </div>

      </>
    )
  }
}

export default withRouter(ToDoList);
