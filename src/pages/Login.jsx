import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addUsername } from '../redux/slices/chatSlice'

function Login() {

  const [input,setInput]=useState("")
  const navigate=useNavigate()
  const dispatch=useDispatch()



  const handleJoin=(e)=>{
    // console.log(input);
    e.preventDefault()
    if(!input.trim()!==""){
      dispatch(addUsername(input))
          navigate('/chat')
         
      }
  }

  return (
    <>
      <div className='h-screen flex justify-center items-center' id='login-div'>
    <form onSubmit={handleJoin}>
          <div className='shadow-xl shadow-sky-600 md:h-80 h-74 md:w-120 w-90 m-5 bg-transparent'>
            <div className='flex flex-col justify-center items-center p-6'>
              <h2 className='sm:text-4xl text-2xl font-semibold text-blue-900 mt-7'>Let's Chat</h2>
              <input onChange={(e)=>setInput(e.target.value)} required value={input} type="text" placeholder='Enter your username' className='w-85 border border-sky-900 px-3 py-1 rounded-lg placeholder-gray-500 text-blue-900  mt-10 focus:outline-2 focus:outline-offset-1 focus:outline-blue-900 shadow placeholder:text-md'/>
              <button type='submit' className='rounded bg-blue-900 px-3 py-2 text-white mt-12 text-md hover:bg-blue-800 cursor-pointer'>Join<i className="fa-solid fa-arrow-right-to-bracket ms-1"></i></button>
            </div>
          </div>
    </form>
      </div>

    </>
  )
}

export default Login