import React from 'react';
import NavBar from './NavBar';
import Clock from './components/clock/Clock';

function Dashboard (props) {
    return (
        <div className="dashboardBackground mainGrid">
                <div className="dashboardContent dashboardLogo">
                    <img src="./ToDoAppMockLogoWhite.png" alt="logo" />
                <Clock />
            </div>
        </div>
    )
}

export default Dashboard;