import React from 'react';
import './UserCardContainer.css';

function UserCardContainer({ children }) {
  return (
    <div className="user-card-container">
      {children}
    </div>
  );
}

export default UserCardContainer; 