import React from 'react';

function EditItem(props) {
    return (
        <div className="editItemContainer">
            <h3 className="editItemHeader">Edit Item</h3>
            <input type="text" placeholder="Item name..." className="editItemInput" value={props.itemName} onChange={props.modifyName}></input>
            <textarea name="description" placeholder="Item description..." rows="6" cols="40" className="editItemInput" value={props.itemDesc} onChange={props.modifyDesc} ></textarea>
            <div>
                <button className="editButtons editButtonGreen" onClick={() => props.onSaveChange(props.id)}>Save</button>
                <button className="editButtons editButtonRed" onClick={() => props.onDeleteItem(props.id)}>Delete Item</button>
            </div>
        </div>
    )
}

export default EditItem;