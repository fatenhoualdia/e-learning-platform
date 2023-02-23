import {
  AttachMoney,
  BarChart,
  ChatBubbleOutline,
  DynamicFeed,
  LineStyle,
  MailOutline,
  PermIdentity,
  Report,
  Storefront,
  Timeline,
  TrendingUp,
  WorkOutline,
} from "@mui/icons-material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import { Link } from "react-router-dom";
import React from "react";

import "./Sidebar.css";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/admin" className="link">
              <li className="sidebarListItem active">
                <HomeWorkIcon className="sidebarIcon" />
                Home
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/courses" className="link">
              <li className="sidebarListItem">
                <MenuBookIcon className="sidebarIcon" />
                Courses
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <Link to="/admin/mail" className="link">
              <li className="sidebarListItem">
                <ChatBubbleOutline className="sidebarIcon" />
                Messages
              </li>
            </Link>
            <Link to="/admin_messages" className="link">
              <li className="sidebarListItem">
                <MailOutline className="sidebarIcon" />
                Recieved Messages
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

