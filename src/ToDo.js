import React from 'react';
import EditItem from './EditItem.js';

function ToDo (props) {

    return (
      <>
        <div className="listContainer">
          <ul className="navList">
            <h2 className="listHeader">Groceries</h2>
            <li className="listItem listItemFlex"><input type="text" className="addToList" placeholder="Add new item..." value={props.newItem} onChange={props.inputHandler} onKeyDown={props.enterHandler}></input><button className="listItemMore" onClick={props.clickHandler}><i className="fas fa-plus-circle icon"></i>Add</button></li>

            {props.list.map((item, index)=>(
              <li className="listItem" key={index}>

                <div className="listItemColumn">
                <div className="listItemFlex">
                <button className="listItemText">
                  <label className="customCheckLabel">
                <input type="checkbox" defaultChecked={props.list.completed} onChange={() => props.onCheck(item.id)} className="checkmark" />
                <span className="customCheckmark"></span>
                </label>
                  {item.title}
                  </button>
                  <button className="listItemMore" onClick={() => props.onEditClick(item.id)}>
                  <i className="fas fa-chevron-down"></i>
                    </button>
                    </div>

                    <div className={item.isOpen ? "menuOpen" : "menuHidden"}>
                    <EditItem id={item.id}
                    itemName={props.modifyName} 
                    itemDesc={props.modifyDesc}
                    modifyName={props.onModifyItem}
                    modifyDesc={props.onModifyDesc}
                    onSaveChange={props.onSaveChange}
                    onDeleteItem={props.onDelete} />
                    </div>
                    </div>

                  </li>
            ))}
            </ul>
        </div>
        </>
    )
};

export default ToDo;