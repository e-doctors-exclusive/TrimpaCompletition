import React, { useState } from 'react'
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ConnectingAirportsOutlinedIcon from '@mui/icons-material/ConnectingAirportsOutlined';
import AirlinesOutlinedIcon from '@mui/icons-material/AirlinesOutlined';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Link } from 'react-router-dom'
import '../styles/SideBar.css'
const SideBar = ({clicked,setClicked}) => {


    const { collapseSidebar } = useProSidebar();
    return (
      <div id="app" style={({ height: "100vh" }, { display: "flex" }, { position:'fixed' })}>
       
        <Sidebar style={{ height: "100vh" }}>
        <Menu>
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={() => {
              setClicked(!clicked)
             collapseSidebar();
            }}
            style={{ textAlign: "center" }}
          >
            {" "}
            <h2>Tripma DB</h2>
          </MenuItem>
          <Link to="/home">
            <MenuItem icon={<HomeOutlinedIcon />}>Home</MenuItem>
          </Link>
          <Link to="/users">
            <MenuItem icon={<PeopleOutlinedIcon />}>Users</MenuItem>
          </Link>
          <Link to="/flights">
          <MenuItem icon={<ConnectingAirportsOutlinedIcon />}>Flights</MenuItem>
          </Link>
          <Link to="/airlines">
          <MenuItem icon={<AirlinesOutlinedIcon />}>Airlines</MenuItem>
          </Link>
          <Link to="/addairline">
          <MenuItem icon={<AddCircleOutlinedIcon />}>Add a Brand</MenuItem>
          </Link>
          <MenuItem icon={<InboxOutlinedIcon />}>Inbox</MenuItem>
          <MenuItem icon={<LogoutIcon />}>Logout</MenuItem>
        </Menu>
      </Sidebar>
      </div>
      
    );
}

export default SideBar