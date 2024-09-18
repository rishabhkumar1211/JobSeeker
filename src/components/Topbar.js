import React from "react";
import "../styles/Topbar.scss";
import ProfileImage from "../public/profile.jpg";
import Tooltip from "@mui/material/Tooltip"; // Import Tooltip from Material UI

const TopBar = () => {
  return (
    <div className="topbar">
      {/* Logo on the left */}
      <div className="topbar__left">
        <div className="topbar__logo">Onefinnet</div>
      </div>

      {/* Right-aligned icons and search bar */}
      <div className="topbar__right">
        {/* Search Input */}
        <input
          type="text"
          className="topbar__search"
          placeholder="Start searching"
        />

        {/* Icons with tooltips */}
        <div className="topbar__icons">
          <Tooltip title="Notifications" arrow>
            <div className="topbar__icon">
              <i className="fas fa-bell"></i>
            </div>
          </Tooltip>

          <Tooltip title="Settings" arrow>
            <div className="topbar__icon">
              <i className="fas fa-cog"></i>
            </div>
          </Tooltip>

          <Tooltip title="Applications" arrow>
            <div className="topbar__icon">
              <i className="fas fa-box"></i>
            </div>
          </Tooltip>
        </div>

        {/* Profile Picture */}
        <Tooltip title="Profile" arrow>
          <div className="topbar__profile">
            <img
              src={ProfileImage}
              alt="Profile"
              className="topbar__profile-img"
            />
          </div>
        </Tooltip>
      </div>
    </div>
  );
};

export default TopBar;
