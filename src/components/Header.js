import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Header = ({ showAddTask, onShowAddTask }) => {
  return (
    <header className="header">
      {location.pathname === '/' && (
        <button onClick={onShowAddTask} className="btn">
          {showAddTask ? 'Close' : 'Add'}
        </button>
      )}
    </header>
  );
};

export default Header;
