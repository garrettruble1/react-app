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

        const editItemContainer = {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            boxShadow: 'inset 0px 5px 5px lightgray'
        }

        const infoButtonContainer = {
            display: 'flex',
            justifyContent: 'center',
            margin: '1em',
            backgroundColor: 'rgb(190, 190, 190)',
            width: '80%',
            height: '2em',
            borderRadius: '5px'
        }

        const editItemHeader = {
            marginBottom: '0',
            color: 'grey'
        }

        const itemInfo = {
            margin: '2em',
            width: '90%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start'
        }

        const detailInfo = {
            fontFamily: 'inherit',
            fontSize: '120%',
            padding: '1em'
        }

        const infoContentContainer = {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%'
        }

        const formLabel = {
            width: '90%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start'
        }

        const editItemInput = {
            margin: '1em auto',
            width: '70%',
            fontFamily: 'inherit',
            fontSize: '15px',
            padding: '15px',
            border: 'solid 1px grey',
            borderRadius: '5px',
            boxShadow: 'none'
        }

        const editButtonGreen = {
            backgroundColor: 'rgb(0, 172, 23)'
        }

        const editButtonRed = {
            backgroundColor: 'rgb(212, 13, 13)'
        }

        return (
            <div style={editItemContainer}>

                <div style={infoButtonContainer}>
                    <button className={this.state.menuToggle ? "infoMenuButton buttonActive" : "infoMenuButton buttonDisabled"} onClick={() => this.infoClick()}>Info</button>
                    <button className={this.state.menuToggle ? "infoMenuButton buttonDisabled" : "infoMenuButton buttonActive"} onClick={() => this.editClick()}>Edit</button>
                </div>

                <div className={this.state.menuToggle ? "infoContentContainer menuOpen" : "menuHidden"}>
                    <h3 style={editItemHeader}>Item Info</h3>
                    <div style={itemInfo}>
                    <p style={detailInfo}>NAME: {this.props.itemName}</p>
                    <p style={detailInfo}>DESCRIPTION: {this.props.itemDesc}</p>
                    <p style={detailInfo}>DUE DATE: {this.props.due}</p>
                    <p style={detailInfo}>COMPLETED: {JSON.stringify(this.props.checked)}</p>
                    </div>
                </div>

                 <div className={this.state.menuToggle ? "menuHidden" : " infoContentContainer menuOpen"}>
                <h3 style={editItemHeader}>Edit Item</h3>

                <form style={infoContentContainer} onSubmit={(event)=>this.handleFormSubmit(event)}>
                    <label htmlFor="title" style={formLabel}>
                        Item Name:
                        <input type="text" name="title" style={editItemInput} value={this.state.formData.title} onChange={this.handleChange} required></input>
                    </label>
                    <label htmlFor="description" style={formLabel}>
                        Item Description:
                        <textarea name="description" style={editItemInput} rows="6" cols="40" value={this.state.formData.description} onChange={this.handleChange} required></textarea>
                    </label>
                    <label htmlFor="dueDate" style={formLabel}>
                        Item Due Date:
                        <input type="date" name="due" style={editItemInput} value={this.state.formData.due} onChange={this.handleChange}></input>
                    </label>
                <div>
                    <button type="submit" style={editButtonGreen} className="editButtons">Save</button>
                    <button style={editButtonRed} className="editButtons" onClick={() => this.props.onDeleteItem(this.props.id)}>Delete Item</button>
                </div>
                </form>
                </div>

            </div>
        )
    }
}

export default MoreInfo;