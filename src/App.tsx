import './App.css'
import { Outlet } from 'react-router-dom'
import Navigation from './components/Header/Navigation'
import Header from './components/Header/Header'
import './CSS/Navigation.css'
// import CSSNotes from '../src/components/CSSNotes'


export default function App() {

  return (
    <>
      <Header text='' />
      <Navigation />
      <Outlet />

    </>
  )
}
