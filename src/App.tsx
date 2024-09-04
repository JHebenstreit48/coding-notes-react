import './App.css'
import { Outlet } from 'react-router-dom'
import Navigation from './components/Header/Navigation'
import './CSS/Navigation.css'


export default function App() {

  return (
    <>
      <h1 className='Header' text='' />
      <Navigation />
      <Outlet />

    </>
  )
}
