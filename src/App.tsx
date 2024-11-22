import { Outlet } from 'react-router-dom'
import './CSS/Navigation.css'
import Footer from './Components/Footer'
import Navigation from './Components/Navigation'


export default function App() {

  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />

    </>
  )
}
