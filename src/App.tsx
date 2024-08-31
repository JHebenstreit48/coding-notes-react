import './App.css'
import { Outlet } from 'react-router-dom'
import Navigation from './components/Navigation'

export default function App() {

  return (
    <>
      <Navigation />
      <Outlet />
    </>
  )
}
