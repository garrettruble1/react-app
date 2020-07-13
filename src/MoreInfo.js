import React from 'react';

class MoreInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            formData: {...this.getToDoFromList()},
            menuToggle: true
        }
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (prevProps !== this.props) {
            this.setState({
                formData: ({ ...this.getToDoFromList() }),
            })
        }
    }
    
    infoClick() {
        this.setState({ menuToggle: true })
    }

    editClick() {
        this.setState({ menuToggle: false })
    }

    getToDoFromList() {
        let itemId = this.props.id;
        return this.props.list.find((item) => item.id === itemId || {
            id: '',
            title: '',
            description: '',
            due: '',
            completed: false,
            isOpen: false
        })
    }

    handleChange = (event) => {
        const value = event.target.value
        const name = event.target.name
        this.setState((state) => {
            return {
            formData: {...state.formData, [name]: value} }
        });
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.props.onUpdateData(this.state.formData);
        this.setState({ menuToggle: true })
    }

    render() {
        return (
            <div className="editItemContainer">

                <div className="infoButtonContainer">
                    <button className={this.state.menuToggle ? "infoMenuButton buttonActive" : "infoMenuButton buttonDisabled"} onClick={() => this.infoClick()}>Info</button>
                    <button className={this.state.menuToggle ? "infoMenuButton buttonDisabled" : "infoMenuButton buttonActive"} onClick={() => this.editClick()}>Edit</button>
                </div>

                <div className={this.state.menuToggle ? "infoContentContainer menuOpen" : "menuHidden"}>
                    <h3 className="editItemHeader">Item Info</h3>
                    <div className="itemInfo">
                    <p className="detailInfo">NAME: {this.props.itemName}</p>
                    <p className="detailInfo">DESCRIPTION: {this.props.itemDesc}</p>
                    <p className="detailInfo">DUE DATE: {this.props.due}</p>
                    <p className="detailInfo">COMPLETED: {JSON.stringify(this.props.checked)}</p>
                    </div>
                </div>

                 <div className={this.state.menuToggle ? "menuHidden" : " infoContentContainer menuOpen"}>
                <h3 className="editItemHeader">Edit Item</h3>

                <form className="infoContentContainer" onSubmit={(event)=>this.handleFormSubmit(event)}>
                    <label htmlFor="title" className="formLabel">
                        Item Name:
                        <input type="text" name="title" className="editItemInput" value={this.state.formData.title} onChange={this.handleChange} required></input>
                    </label>
                    <label htmlFor="description" className="formLabel">
                        Item Description:
                        <textarea name="description" className="editItemInput" rows="6" cols="40" className="editItemInput" value={this.state.formData.description} onChange={this.handleChange} required></textarea>
                    </label>
                    <label htmlFor="dueDate" className="formLabel">
                        Item Due Date:
                        <input type="date" name="due" className="editItemInput" value={this.state.formData.due} onChange={this.handleChange}></input>
                    </label>
                <div>
                    <button type="submit" className="editButtons editButtonGreen">Save</button>
                    <button className="editButtons editButtonRed" onClick={() => this.props.onDeleteItem(this.props.id)}>Delete Item</button>
                </div>
                </form>
                </div>

            </div>
        )
    }
}

export default MoreInfo;