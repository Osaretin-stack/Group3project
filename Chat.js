import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, SearchOutlined, MoreVert } from '@material-ui/icons';
import React from 'react';
import "./Chat.css";


function Chat() {
    return  <div 
        className="chat">
            <div className="chat__header">
                <Avatar />

            <div className="chat__headerInfo">  
                <h3>Room name</h3>
                <p>last seen at...</p>
                </div>
           
                <div className="chat__headerRight">
                <IconButton>
                <SearchOutlined  />
                </IconButton>

                <IconButton>
                <AttachFile />
                </IconButton>

                <IconButton>
                <MoreVert  />
                </IconButton>
                
                </div>
            </div>

            <div className="chat__body">
               <p className="chat__message">
                    <span className="chat__name">Osaretin</span>
                     This is a message

                    <span className="chat__timeshamp"> {new Date().toUTCString()}</span>

                   
                </p> 
            </div>
        </div>;
    
}

export default Chat;
