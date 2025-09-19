import React from 'react'

function MessageList() {
  return (
    <>
    <div className='p-4 space-y-3'>
      {/* Received Message */}
      <div  className='flex justify-start'>
        <div className='max-w-[70%] break-all bg-gray-200 px-3 py-2 rounded-lg text-gray-900 text-sm shadow rounded-tl-none'>
          Hey!How you?
          <div className='text-right text-[10px] text-gray-500 mt-1 ms-10'>
            11:18 AM
          </div>
        </div>
      </div>

      {/* Sent Message */}
      <div  className='flex justify-end'>
        <div className='max-w-[70%] text-white break-all bg-sky-600 px-3 py-2 rounded-lg text-gray-900 text-sm shadow rounded-br-none'>
          Fine,Dear!!
          <div className='text-right text-[10px] text-gray-200 mt-1 ms-10'>
            11:18 AM
          </div>
        </div>
      </div>



    </div>
    </>
  )
}

export default MessageList
