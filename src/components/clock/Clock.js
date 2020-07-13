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
        return (
            
                <div className="welcomeContainer">
                    <h2 className="dashboardText">Hey there, Garrett!</h2>
                    <h3 className="dashboardText">It is {this.state.date.toLocaleTimeString()}</h3>
                </div>
        )
    }
}

export default Clock;