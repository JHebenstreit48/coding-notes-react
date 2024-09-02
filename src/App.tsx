import './App.css'
import { Outlet, useLocation } from 'react-router-dom'
import Navigation from './components/Navigation'
import Header from './components/Header'
import DynamicNotes from './components/DynamicNotes'
import HTMLNotes from '../src/components/HTMLNotes'
import './CSS/Navigation.css'
// import { CSSNotes } from '../src/components/CSSNotes'


export default function App() {
  const location = useLocation();

  let notes: any[] = [];
  if (location.pathname.includes('html')) {
    notes = [HTMLNotes];
  } else if (location.pathname.includes('css')) {
    // notes = CSSNotes;
  }

  return (
    <>
      <Header text='' />
      <Navigation />
      <Outlet />
        { notes.length > 0 && <DynamicNotes items={ notes } />}
      
    </>
  )
}
