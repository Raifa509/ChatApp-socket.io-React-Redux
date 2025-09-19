import React from 'react'
import Tooltip from '@mui/material/Tooltip';

function Header() {
  return (
    <>
      <div className="h-18 bg-blue-900 w-full text-white bg-none" style={{ borderRadius: '15px 15px 0px 0px' }}>
        <div className='flex justify-between items-center p-4 w-full'>
          {/* user profile */}
          <div className='flex justify-center items-center'>
            <div className='bg-black flex justify-center items-center text-2xl me-2' style={{width:'32px',height:'32px',borderRadius:'50%'}}>
              <h2 className='text-xl'>R</h2>
            </div>
            <div className='flex flex-col'>
              <h2 className='text-md'>Raifa</h2>
              <span style={{fontSize:'11px'}}>Online</span>
            </div>
          </div>

          {/* icons */}
          <div className='flex items-center justify-around  '>
            <Tooltip title="Video Call"> <i className="fa-solid fa-video me-3 text-lg cursor-pointer"></i></Tooltip>
            <Tooltip title="Audio Call"> <i className="fa-solid fa-phone me-3 text-lg cursor-pointer"></i></Tooltip>
            <Tooltip title="More"><i className="fa-solid fa-ellipsis-vertical text-lg cursor-pointer"></i></Tooltip>
          </div>
        </div>
      </div>

    </>
  )
}

export default Header