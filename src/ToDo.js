import React from 'react';

function ToDo (props) {

    return (
        <div className="listContainer">
          <ul className="navList">
            <h2 className="listHeader">Groceries</h2>
            <li className="listItem listItemFlex"><input type="text" className="addToList" placeholder="Add new item..." value={props.newItem} onChange={props.inputHandler} onKeyDown={props.enterHandler}></input><button className="listItemMore" onClick={props.clickHandler}><i className="fas fa-plus-circle icon"></i>Add</button></li>
            {props.list.map((item)=>(
              <li className="listItem listItemFlex">
                <button className="listItemText">
                  <i className="far fa-check-circle fa-lg icon"></i>
                  {item.title}
                  </button>
                  <button className="listItemMore">
                    <i className="fas fa-caret-down fa-lg icon"></i>
                    </button>
                  </li>
            ))}
            </ul>
        </div>
    )
    
};

export default ToDo;