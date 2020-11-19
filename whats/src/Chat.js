import React from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import MoreVert from '@material-ui/icons/MoreVert';
import InsertEmoticon from '@material-ui/icons/InsertEmoticon';
import Mic from '@material-ui/icons/Mic';
import AttachFile from '@material-ui/icons/AttachFile';
import './Chat.css';

function Chat() {
  return (
       <div className="chat">
            <div className="chat__header">
                <Avatar src="https://picsum.photos/200/300" />

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
                    <span className="chat__timestamp">{new Date().toLocaleString()} {}
                    </span>
                </p> 

                <p className="chat__message chat__receiver">
                    <span className="chat__name">Daniella</span>
                     This is a message
                    <span className="chat__timestamp">{new 
                    Date().toLocaleString()}</span>
                </p> 

                <p className="chat__message">
                    <span className="chat__name">Osaretin</span>
                     This is a message
                    <span className="chat__timestamp">{new 
                Date().toLocaleString()}</span>
                </p> 

            </div>

                <div className="chat__footer">
                   <InsertEmoticon />
                    <form>
                     <input placeholder="Type a message"
                     type="text" />
                     <button type="submit">send a message</button>
                   </form>
                   <Mic /> 
                   
               

            </div>
      </div>
  );
}

export default Chat;