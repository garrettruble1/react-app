import React from 'react';

function ToDo (props) {
    return (
        <div class="listContainer">
          <ul class="navList">
            <h2 class="listHeader">Groceries</h2>
            <li class="listItem listItemFlex"><button class="listItemText"><i class="fas fa-pen fa-sm icon"></i>Add Item...</button></li>
            {props.list.map((item)=>(
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
    )
    
};

export default ToDo;