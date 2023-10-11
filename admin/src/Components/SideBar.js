import React from 'react'
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
const SideBar = () => {
    const { collapseSidebar } = useProSidebar();
    return (
      <div id="app" style={({ height: "100vh" }, { display: "flex" }, { position:'fixed' })}>
        <Sidebar style={{ height: "100vh" }}>
        <Menu>
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={() => {
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
          <MenuItem icon={<ConnectingAirportsOutlinedIcon />}>Flights</MenuItem>
          <MenuItem icon={<AirlinesOutlinedIcon />}>Airlines</MenuItem>
          <MenuItem icon={<AddCircleOutlinedIcon />}>Add a Brand</MenuItem>
          <MenuItem icon={<InboxOutlinedIcon />}>Inbox</MenuItem>
          <MenuItem icon={<LogoutIcon />}>Logout</MenuItem>
        </Menu>
      </Sidebar>
      </div>
      
    );
}

export default SideBar