import React from 'react';
import './App.css';

function App() {
  return (
    <div class="mainGrid">

      <div class="mainCol-1">

        <nav>
          <a href="#" class="navLink"><img src="./ToDoMockLogo.svg" alt="logo" class="logo" /></a>
          <ul class="navList">
            <li class="navItem"><a href="#" class="navLink">My To Dos</a></li>
            <li class="navItem"><a href="#" class="navLink">Link 2</a></li>
            <li class="navItem"><a href="#" class="navLink">Link 3</a></li>
          </ul>
        </nav>

        <ul class="navList">
          <li class="navItem"><a href="#" class="navLink"><img src="./ToDoProfile.jpg" alt="profile image" width="40"/>My Profile</a></li>
        </ul>

      </div>

      <div class="mainCol-2 contentFlex">

        <h1 class="pageHeader">To Do</h1>

        <div class="listContainer">
          <ul class="navList">
            <h2 class="listHeader">Groceries</h2>
            <li class="listItem listItemFlex"><button class="listItemText"><i class="fas fa-pen fa-sm icon"></i>Add Item...</button></li>
            <li class="listItem listItemFlex"><button class="listItemText"><i class="far fa-check-circle fa-lg icon"></i>Milk</button><button class="listItemText"><i class="fas fa-caret-down fa-lg icon"></i></button></li>
            <li class="listItem listItemFlex"><button class="listItemText"><i class="far fa-check-circle fa-lg icon"></i>Eggs</button><button class="listItemText"><i class="fas fa-caret-down fa-lg icon"></i></button></li>
            <li class="listItem listItemFlex"><button class="listItemText"><i class="far fa-check-circle fa-lg icon"></i>Butter</button><button class="listItemText"><i class="fas fa-caret-down fa-lg icon"></i></button></li>
            <li class="listItem listItemFlex"><button class="listItemText"><i class="far fa-check-circle fa-lg icon"></i>Coffee</button><button class="listItemText"><i class="fas fa-caret-down fa-lg icon"></i></button></li>
            <li class="listItem listItemFlex"><button class="listItemText"><i class="far fa-check-circle fa-lg icon"></i>Salt</button><button class="listItemText"><i class="fas fa-caret-down fa-lg icon"></i></button></li>
          </ul>
        </div>

      </div>

    </div>
  );
}

export default App;
