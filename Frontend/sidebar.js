import React from 'react';
import { Nav } from 'react-bootstrap';
import './Sidebar.css';


function Sidebar() {
  const sidebarStyle = {
    width: '250px',
    height: '100vh',
    backgroundColor: '#6a5acd',
    color: 'white',
    padding: '20px',
    position: 'fixed',
  };

  const profileImageStyle = {
    borderRadius: '50%',
    width: '60px',
    marginBottom: '10px',
  };

  const navLinkStyle = {
    color: 'white',
    padding: '8px 0',
    textDecoration: 'none',
    display: 'block',
  };

  const activeLinkStyle = {
    backgroundColor: '#8a2be2',
    borderRadius: '5px',
    padding: '8px 12px',
  };

  return (
    <div style={sidebarStyle}>
      <div className="mb-4">
        <h4 className="fw-bold">HRMS</h4>
        <small>Human Resource Management System</small>
      </div>

      <div className="mb-4 text-center">
        <img src="https://i.pravatar.cc/100" alt="User" style={profileImageStyle} />
        <div>Maria</div>
        <small>HR Manager</small>
      </div>

      <Nav className="flex-column">
        <Nav.Link href="#" style={navLinkStyle}>Dashboard</Nav.Link>
        <Nav.Link href="#" style={navLinkStyle}>Chat</Nav.Link>
        <Nav.Link href="#" style={{ ...navLinkStyle, ...activeLinkStyle }}>Employees</Nav.Link>
        <Nav.Link href="#" style={navLinkStyle}>Feed</Nav.Link>
        <Nav.Link href="#" style={navLinkStyle}>Recognition</Nav.Link>
        <Nav.Link href="#" style={navLinkStyle}>Event</Nav.Link>
        <Nav.Link href="#" style={navLinkStyle}>Profile</Nav.Link>
        <Nav.Link href="#" style={navLinkStyle}>Settings</Nav.Link>
      </Nav>
    </div>
  );
}

export default Sidebar;