import React from 'react';
import NavBar from './NavBar';
import Clock from './components/clock/Clock';

function Dashboard (props) {

    const dashboardBackground = {
        height: '100vh',
        backgroundImage: `url(${require('./ToDoDashboardBg.png')})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }

    const dashboardLogo = {
        margin: '0',
        padding: '0',
        width: '100%',
        gridColumnStart: '4',
        gridColumnEnd: '8',
        gridRowStart: '2',
        gridRowEnd: '3'
    }

    return (
        <div style={dashboardBackground} className="mainGrid">
                <div style={dashboardLogo} className="dashboardContent">
                    <img src="./ToDoAppMockLogoWhite.png" alt="logo" />
                <Clock />
            </div>
        </div>
    )
}

export default Dashboard;