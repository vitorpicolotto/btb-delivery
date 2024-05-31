import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import { LocaisContextProvider } from './context/LocaisContext'

function App() {
  
  

  return (
    <>
      <LocaisContextProvider>
      <Header />
      <Outlet />
      </LocaisContextProvider>
    </>
  )
}

export default App
