import React from 'react'
import Header from '../components/Header'
import MessageList from '../components/MessageList'
import MessageInput from '../components/MessageInput'

function ChatPage() {
  return (
    <>
      <div className='h-screen bg-sky-100 flex justify-center items-center chat-container '>
         <div className=' w-[30rem] h-[38rem]  shadow-xl flex flex-col'>
          <Header/>
        <div className="flex-1 overflow-y-auto">
          <MessageList />
        </div>
          <MessageInput />
         </div>
      </div>


    </>
  )
}

export default ChatPage