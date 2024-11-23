import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer'
import Navigation from './Components/Navigation';
import './CSS/Page.css';
import './CSS/Header.css';
import './CSS/Navigation.css'

export default function App() {

  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />

    </>
  )
}
