import React from 'react'
import Header from '../components/Header'
import MessageList from '../components/MessageList'
import MessageInput from '../components/MessageInput'

function ChatPage() {
  return (
    <>
      <div className='h-screen bg-sky-100 flex justify-center items-center '>
         <div className=' w-[30rem] h-[38rem] rounded-2xl shadow-xl'>
          <Header/>
          <MessageList/>
          <MessageInput />
         </div>
      </div>


    </>
  )
}

export default ChatPage