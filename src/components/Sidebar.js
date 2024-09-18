// Sidebar.js
import React from "react";
import "../styles/Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li className="active">
          {/* Home icon in front of Dashboard */}
          <i className="fas fa-home"></i>
          <span className="sidebar__text">Dashboard</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
