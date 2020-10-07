import { DonutLarge, Message, MoreVert, SearchOutlined } from "@material-ui/icons";
import React from "react";
import "./Sidebar.css";
import { Avatar, IconButton } from "@material-ui/core";
import SidebarChat from "./SidebarChat";

function Sidebar() {
    return (
    <div className="sidebar">
         <div className="sidebar__header">
            <Avatar src="https://picsum.photos/seed/picsum/200/300" />
         <div className="sidebar__headerRight">

           <IconButton>
             <DonutLarge  />
            </IconButton>

            <IconButton>
             <Message />
            </IconButton>

            <IconButton>
             <MoreVert  />
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
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
            </div>

    </div>
    );
    
}

export default Sidebar;
