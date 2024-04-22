import React from 'react';
import { useState  } from 'react';

const Profile = () => {
  // State to manage dropdown visibility
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle logout
  const handleLogout = () => {
    // Perform logout logic here
    console.log('Logged out');
  };

  return (
      
    <div className="profile">
        {/* Profile button */}
      <button className="profile-button" onClick={toggleDropdown}>
        <img className="profile-avatar" src="https://icons8.com/icon/7819/male-user" alt="Avatar" />
        <span className="profile-name">John Doe</span>
        <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'}`}></i>
      </button>

    
      {isOpen && (
        <div className="dropdown-menu">
          <ul>
            <li>
              <a href="/">My Profile</a>
            </li>
            <li>
              <a href="/">Settings</a>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Profile;

