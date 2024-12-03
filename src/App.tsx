import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer';
import './CSS/Page.css';
import './CSS/Header.css';
import './CSS/Navigation.css'

export default function App() {

  return (

    <div style={{display: "grid", gridTemplateRows: "1fr auto", minHeight: "100vh"}}>

      <div style={{paddingTop: "11rem"}}>

      <Outlet />

      </div>
      
      <Footer />

    </div>
  )
}
