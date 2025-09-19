import React, { useState } from 'react'

function MessageInput({ sendMessage }) {
  const [message, setMessage] = useState("")

  const handleSend = () => {
    if (!message.trim()) return
    sendMessage(message)
    setMessage("") // clear input
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault() 
      handleSend()
    }
  }

  return (
    <>
      <div className='h-14 bg-blue-900' style={{ borderRadius: '7px 7px 14px 14px' }}>
        <div className='flex justify-between items-center text-white py-3 px-4'>
          <input
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            onKeyDown={handleKeyPress}
            type="text"
            placeholder='Type your Message here...'
            className='border border-blue-900 focus:outline-2 focus:outline-offset-1 focus:outline-blue-900 w-73 py-1 px-2 rounded-lg placeholder:text-sm'
          />
          <div
            onClick={handleSend}
            className='w-[23px] h-[23px] p-4 flex justify-center items-center cursor-pointer text-sm'
            style={{ borderRadius: '50%' }}
          >
            <i className="fa-solid fa-paper-plane"></i>
          </div>
        </div>
      </div>
    </>
  )
}

export default MessageInput
