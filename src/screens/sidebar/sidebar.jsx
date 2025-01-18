import React, { useState } from "react";
import {
  HomeOutlined,
  LogoutOutlined,
  SearchOutlined,
  SettingOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { IoBookOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import "./sidebar.css";


const Sidebar = ({children}) => {
  const[isOpen, setIsOpen] = useState(true); 
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/home",
      name: "Home",
      icon: <HomeOutlined />,
    },
    {
      path: "/search",
      name: "Search",
      icon: <SearchOutlined />,
    },
    {
      path: "/myCourses",
      name: "My Courses",
      icon: <IoBookOutline />,
    },
    {
      path: "/myCart",
      name: "My Cart",
      icon: <ShoppingCartOutlined />,
    },
    {
      path: "/profile",
      name: "My Profile",
      icon: <UserOutlined />,
    },
    {
      path: "/setting",
      name: "Settings",
      icon: <SettingOutlined />,
    },
    {
      path: "/",
      name: "Logout",
      icon: <LogoutOutlined />,
    },
  ];
  return (
    <div className="side-container">
      <div style={{width: isOpen ? "300px" : "300px"}} className="sidebar">
        <div className="top-logo">
          <h1 style={{display: isOpen ? "block" : "none"}} className="logo">eLearning</h1>
          <div style={{marginLeft: isOpen ? "24px" : "0px"}} className="menu">
            <FaBars onClick={toggle}/>
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
            style={{display:"flex", flexDirection: "row", marginBottom: "15px", color: "white"}}
          >
            <div className="icon">{item.icon}</div>
            <div className="link_text">{item.name}</div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
