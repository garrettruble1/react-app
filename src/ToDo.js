import React from 'react';

function ToDo (props) {
    return (
        <div className="listContainer">
          <ul className="navList">
            <h2 className="listHeader">Groceries</h2>
            <li className="listItem listItemFlex"><button className="listItemText"><i className="fas fa-pen fa-sm icon"></i>Add Item...</button></li>
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