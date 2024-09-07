import {Link, useLocation} from 'react-router-dom';
import '../CSS/Navigation.css';

interface NavigationLinks {
    to: string;
    pageTitle: string;
}

    const ListItems = (props: NavigationLinks & { isActive: boolean }) => {
        return (
          <li className={`nav-button {props.isActive ? 'active' : ''}`}>
            <Link to={props.to}>{props.pageTitle}</Link>
          </li>
        );
      };

export default function Navigation() {
    const currentTab = useLocation().pathname;

    const navLinks = [

        {pageTitle: 'HTML', path: '/'},
        {pageTitle: 'CSS', path: '/css'},
        {pageTitle: 'Git', path: '/git'},
        {pageTitle: 'JavaScript', path: '/javascript'},
        {pageTitle: 'TypeScript', path: '/typescript'},
        {pageTitle: 'Servers', path: '/servers'},
        {pageTitle: 'APIs', path: '/apis'},
        {pageTitle: 'React', path: '/react'},
      ];
    
      return (
        <>
        <ul className="nav-css">
          {
            navLinks.map((navLinks) => (
              <ListItems 
              key={navLinks.pageTitle}
              to={navLinks.path}
              pageTitle={navLinks.pageTitle}
              isActive={currentTab === navLinks.path} />
            ))
          }
        </ul>

        
        
        </>
      );

}
