import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import ChatPage from './pages/ChatPage'
function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/chat' element={<ChatPage/>}/>
      </Routes>
    </>
  )
}

export default App
