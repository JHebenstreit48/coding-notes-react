import './App.css'
import { Outlet } from 'react-router-dom'
import Navigation from './components/Navigation'
import Header from './components/Header'

export default function App() {

  return (
    <>
      <Header text='' />
      <Navigation />
      <Outlet />
    </>
  )
}
