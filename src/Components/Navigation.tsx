import { Link, useLocation } from 'react-router-dom';
import '../CSS/Navigation.css';
// import { useRef } from 'react';

interface NavigationLinks {
  to: string;
  pageTitle: string;
}

const ListItems = ({ to, pageTitle, isActive }: NavigationLinks & { isActive: boolean }) => {
  return (
    <li className={`nav-button ${isActive ? 'active' : ''}`}>
      <Link to={to}>{pageTitle}</Link>
    </li>
  );
};

export default function Navigation() {
  const currentTab = useLocation().pathname;
  // const navRef = useRef<HTMLDivElement>(null);

  const navLinks = [

    { pageTitle: 'HTML', path: '/' },
    { pageTitle: 'CSS', path: '/css' },
    { pageTitle: 'Git', path: '/git' },
    { pageTitle: 'JavaScript', path: '/javascript' },
    // { pageTitle: 'Web APIs', path: '/webapis' },
    { pageTitle: 'Node', path: '/node' },
    { pageTitle: 'TypeScript', path: '/typescript' },
    { pageTitle: 'Servers', path: '/servers' },
    { pageTitle: 'APIs', path: '/apis' },
    { pageTitle: 'SQL', path: '/postgresql' },
    { pageTitle: 'React', path: '/react' },
    // { pageTitle: 'React TS', path: '/reactandtypescript' },
    // { pageTitle: 'React FS', path: '/fullstackreact' },
    // { pageTitle: 'NoSQL', path: '/nosql' },
  ];

  // const scroll = (scrollOffset: number) => {
  //   if (navRef.current) {
  //     navRef.current.scrollLeft += scrollOffset;
  //   }
  // };

  return (
    <>
      {/* <div ref={navRef} className="nav-container"> */}
      
        <ul className="nav-css">
          {/* <div>
          <button className="scroll-arrow left-arrow" onClick={() => scroll(-200)}>&lt;</button>
          </div> */}

          {navLinks.map(link => (
            <ListItems
              key={link.pageTitle}
              to={link.path}
              pageTitle={link.pageTitle}
              isActive={currentTab === link.path}
            />
          ))}
          {/* <div>
          <button className="scroll-arrow right-arrow" onClick={() => scroll(200)}>&gt;</button>
          </div> */}
        </ul>

      {/* </div> */}



    </>
  );
}
