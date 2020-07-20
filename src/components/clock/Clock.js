import React, { Component } from 'react';

class Clock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    componentDidMount() {
        this.timerId = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {

    const welcomeContainer = {
        margin: '4em',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '2px solid lightgray',
        borderRadius: '5px',
        width: '20em',
        height: '8em',
        gridColumnStart: '5',
        gridColumnEnd: '7'
    }

    const dashboardText = {
        color: 'white',
        fontFamily: '"Roboto", sans-serif'
    }
        return (
            
                <div style={welcomeContainer}>
                    <h2 style={dashboardText}>Hey there, Garrett!</h2>
                    <h3 style={dashboardText}>It is {this.state.date.toLocaleTimeString()}</h3>
                </div>
        )
    }
}

export default Clock;