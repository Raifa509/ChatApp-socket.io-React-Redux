import React, { useEffect } from 'react'
import Header from '../components/Header'
import MessageList from '../components/MessageList'
import MessageInput from '../components/MessageInput'
import io from "socket.io-client";
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../redux/slices/chatSlice';
import { socket } from "../socket";


function ChatPage() {


  const username=useSelector(state=>state.chatReducer.username)
  // console.log(username);
  const dispatch=useDispatch()

 useEffect(() => {
    if (!username) return;

    // notify backend that this user joined
    socket.emit("join", username);

    // listen for incoming messages
    socket.on("receive-message", (msg) => {
      dispatch(addMessage(msg));
    });

   
    return () => {
      socket.off("receive-message"); 
    };
  }, [username, dispatch]);

  const sendMessage = (text) => {
    if (!text.trim()) return;

    const msg = {
      user: username,
      text,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    socket.emit("send-message", text); 
  };

  return (
    <>
      <div className='h-screen bg-sky-100 flex justify-center items-center chat-container'>
        <div className=' md:w-[30rem] w-[22rem] h-[38rem] rounded-xl shadow-xl flex flex-col'>
          <Header />
          <div className="flex-1 overflow-y-auto">
            <MessageList />
          </div>
          <MessageInput sendMessage={sendMessage}/>
        </div>
      </div>


    </>
  )
}

export default ChatPage