import React, { useEffect, useState } from 'react';
import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Pusher from "pusher-js";
import axios from './axios';

function App() {
  const [messages, setMessages] = useState([]);

  useEffect (() =>{
    axios.get("/messages/sync").then((response) => {
      setMessages(response.data);
    });
  }, []);

  useEffect(() => {
    const pusher = new Pusher('065254538e85ca4e8f08', {
      cluster: 'us2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      //alert(JSON.stringify(newMessage)); - DELETE!!!
      setMessages([...messages, newMessage]); //... is a spread operator
    });

    return() => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]); //need to add it as a dependency

  console.log(messages);

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat messages={messages}/>
      </div>
    </div>
  );
}

export default App;
