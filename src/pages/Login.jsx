import React from 'react'

function Login() {
  return (
    <>
      <div className='h-screen flex justify-center items-center' id='login-div'>
        <div className='shadow-xl shadow-sky-600 md:h-80 h-74 md:w-120 w-full m-5 bg-transparent'>
          <div className='flex flex-col justify-center items-center p-6'>
            <h2 className='sm:text-4xl text-2xl font-semibold text-white mt-7'>Let's Chat</h2>
            <input type="text" placeholder='Enter your username' className='w-85 border border-sky-800 px-3 py-1 rounded-lg placeholder-gray-500 text-sky-900  mt-15 focus:outline-2 focus:outline-offset-1 focus:outline-sky-600 shadow '/>
            <button className='rounded bg-sky-800 px-3 py-2 text-white mt-10 text-md hover:bg-sky-700 cursor-pointer'>Join<i className="fa-solid fa-arrow-right-to-bracket ms-1"></i></button>
          </div>
        </div>
      </div>

    </>
  )
}

export default Login