import React from 'react'


function MessageInput() {
  return (
    <>
    <div className='h-14  bg-blue-900' style={{ borderRadius: '7px 7px 14px 14px' }}>
      <div className='flex justify-between items-center text-white py-3 px-4'>
        <input type="text" placeholder='Type your Message here...' className='border border-blue-900 focus:outline-2 focus:outline-offset-1 focus:outline-blue-900 w-73 py-1 px-2 rounded-lg placeholder:text-sm ' />
       <div className='w-[23px] h-[23px] p-4 flex justify-center items-center cursor-pointer text-sm' style={{borderRadius:'50%'}}> <i class="fa-solid fa-paper-plane"></i>
       </div>
      </div>
    </div>
    </>
  )
}

export default MessageInput