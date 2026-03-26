import React from 'react';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <h1>User Dashboard</h1>
            <div className="user-info">
                <h2>User Information</h2>
                <p>Name: [User Name]</p>
                <p>Email: [User Email]</p>
            </div>
            <div className="recent-files">
                <h2>Recent Files</h2>
                <ul>
                    <li>File1.txt</li>
                    <li>File2.png</li>
                </ul>
            </div>
            <div className="quick-stats">
                <h2>Quick Stats</h2>
                <p>Total Files: 20</p>
                <p>Shared Files: 5</p>
            </div>
            <div className="navigation">
                <h2>Navigation</h2>
                <ul>
                    <li><a href="/profile">Profile</a></li>
                    <li><a href="/files">My Files</a></li>
                    <li><a href="/settings">Settings</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;