import { Outlet } from 'react-router-dom'
import './CSS/Navigation.css'
import Footer from './Components/HeaderNavFooter/Footer'


export default function App() {

  return (
    <>
      <Outlet />
      <Footer />

    </>
  )
}
