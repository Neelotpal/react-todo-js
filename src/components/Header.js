import React, { useState } from 'react';

const Header = ({ showAddTask, onShowAddTask }) => {
  return (
    <header className="header">
      <button onClick={onShowAddTask} className="btn">
        {showAddTask ? 'Close' : 'Add'}
      </button>
    </header>
  );
};

export default Header;
