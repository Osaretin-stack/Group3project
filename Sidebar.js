import React from 'react';
import "./Sidebar.css";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import SidebarChat from "./SidebarChat";

function Sidebar() {
  return (
    <div className="sidebar" >
      
      <div className="sidebar__header">
      <Avatar src="https://picsum.photos/seed/picsum/200/300" />
      <div className="sidebar__headerRight">
      <IconButton>
            <DonutLargeIcon />
            </IconButton>

            <IconButton>
             <ChatIcon />
            </IconButton>

            <IconButton>
             <MoreVertIcon  />
            </IconButton>
          </div>    
          
          </div>

          <div className="sidebar__search"> 
          <div className="sidebar__searchContainer">
            <SearchOutlined />
            <input placeholder="search or start new chat" type="text" />

            </div>
        </div>
        <div className="sidebar__chats">
            <SidebarChat/>
           
            </div>
           

        </div>
  );
}

export default Sidebar;