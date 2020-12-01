import React, { useState } from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import MoreVert from '@material-ui/icons/MoreVert';
import InsertEmoticon from '@material-ui/icons/InsertEmoticon';
import Mic from '@material-ui/icons/Mic';
import AttachFile from '@material-ui/icons/AttachFile';

import axios from './axios';
import './Chat.css';


function Chat({ messages }) {

    const [input, setInput] = useState("");
    
    const sendMessage = async (e) => {
        e.preventDefault();

        axios.post("/messages/new", {
            message: input,
            name: "Shivani", //hardcoded name
            timestamp: "11/30/2020",
            received: true,
        });

        setInput("");
    };



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
                {messages.map((message) => (
                
                <p className= {`chat__message ${message.received && "chat__receiver"}`}>
                    <span className="chat__name">{message.name}</span>
                     {message.message}
                    <span className="chat__timestamp">{message.timestamp}</span>
                </p> 
                ))}
                          
            </div>

                <div className="chat__footer">
                   <InsertEmoticon />
                    <form>
                     <input 
                     value= {input} 
                     onChange={ (e)=> setInput(e.target.value)} 
                     placeholder="Type a message"
                     type="text" />
                     <button onClick={sendMessage} type="submit">send a message</button>
                   </form>
                   <Mic /> 
                   
               

            </div>
      </div>
  );
}

export default Chat;