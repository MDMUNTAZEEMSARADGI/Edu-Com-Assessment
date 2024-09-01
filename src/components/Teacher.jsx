import React, { useState } from 'react';
import './Teacher.css';
import { FaHome, FaClipboardList, FaChartBar, FaUserFriends, FaEnvelope, FaCog, FaQuestionCircle, FaSignOutAlt, FaBars, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Teacher = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/login');
    };


    const [sidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className={`dashboard-container ${sidebarOpen ? 'sidebar-open' : ''}`}>
            <div className={`sidebar ${sidebarOpen ? '' : 'sidebar-collapsed'}`}>
                {/* <div className={`dashboard-container ${sidebarOpen ? 'sidebar-open' : ''}`}>
            <div className="sidebar"> */}
                <div className="sidebar-header">
                    <h2>{sidebarOpen ? 'Dashboard' : ''}</h2>
                    <button className="hamburger" onClick={toggleSidebar}>
                        {sidebarOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
                <nav className="sidebar-nav">
                    <Link to="/teacher" className="nav-link">
                        <FaHome className="nav-icon" />
                        {sidebarOpen && <span>Dashboard</span>}
                    </Link>
                    <Link to="/addexam" className="nav-link">
                        <FaClipboardList className="nav-icon" />
                        {sidebarOpen && <span>Exams</span>}
                    </Link>
                    <Link to="/results" className="nav-link">
                        <FaChartBar className="nav-icon" />
                        {sidebarOpen && <span>Results</span>}
                    </Link>
                    <Link to="/records" className="nav-link">
                        <FaUserFriends className="nav-icon" />
                        {sidebarOpen && <span>Records</span>}
                    </Link>
                    <Link to="/message" className="nav-link">
                        <FaEnvelope className="nav-icon" />
                        {sidebarOpen && <span>Messages</span>}
                    </Link>
                    <Link to="/settings" className="nav-link">
                        <FaCog className="nav-icon" />
                        {sidebarOpen && <span>Settings</span>}
                    </Link>
                    <a href="#" className="nav-link">
                        <FaQuestionCircle className="nav-icon" />
                        {sidebarOpen && <span>Help</span>}
                    </a>
                    <a href="#" className="nav-link logout">
                        <FaSignOutAlt className="nav-icon" />
                        {sidebarOpen && <span onClick={handleLogout}>Log out</span>}

                    </a>
                </nav>
            </div>

            <div className="content">
                <header className="dashboard-header">
                    {/* <button className="hamburger" onClick={toggleSidebar}>
                        {sidebarOpen ? <FaTimes /> : <FaBars />}
                    </button> */}
                    <h1>Teacher's Dashboard</h1>
                </header>
                <div className="dashboard-cards">
                    <div className="dashboard-card">
                        <div className="card-icon">👤</div>
                        <div className="card-details">
                            <p>Records</p>
                            <h2>2</h2>
                        </div>
                    </div>
                    <div className="dashboard-card">
                        <div className="card-icon">📄</div>
                        <div className="card-details">
                            <p>Exams</p>
                            <h2>1</h2>
                        </div>
                    </div>
                    <div className="dashboard-card">
                        <div className="card-icon">📊</div>
                        <div className="card-details">
                            <p>Results</p>
                            <h2>2</h2>
                        </div>
                    </div>
                    <div className="dashboard-card">
                        <div className="card-icon">📩</div>
                        <div className="card-details">
                            <p>Announcements</p>
                            <h2>1</h2>
                        </div>
                    </div>
                </div>
                <div className="recent-results">
                    <h3>Recent results</h3>
                    <ul>
                        <li>
                            <span>Aug 04, 2023</span> - Annie Frank - Computer Network - 0%
                        </li>
                        <li>
                            <span>Aug 04, 2023</span> - Abraham Lincoln - Computer Network - 60%
                        </li>
                    </ul>
                    <button className="see-all-btn">See All</button>
                </div>
            </div>
        </div>
    );
};

export default Teacher;



// import React from 'react';

// const Dashboard = () => {

//     return (
//         <div className="dashboard">
//             <h2>Welcome to the Dashboard</h2>
//             <button>Logout</button>
//         </div>
//     );
// };

// export default Dashboard;
