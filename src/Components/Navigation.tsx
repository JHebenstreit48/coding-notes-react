import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../CSS/Navigation.css';
// Define an array of page objects with subpages

const pages = [
  {
    name: 'HTML',
    path: '/html',
    subpages: [{ name: 'HTML Code Notes', path: '/htmlcode' }]
  },
  {
    name: 'CSS',
    path: '/css',
    subpages: [{ name: 'CSS Code Notes', path: '/css/csscode' }]
  },
  {
    name: 'Git',
    path: '/git',
    subpages: [{ name: 'Git Code Notes', path: '/git/gitcode' }]
  },
  {
    name: 'JavaScript',
    path: '/javascript',
    subpages: [{ name: 'JavaScript Code Notes', path: '/javascript/javascriptcode' }]
  },
  {
    name: 'Node',
    path: '/node',
    subpages: [{ name: 'Node.JS Code Notes', path: '/node/nodecode' }]
  },
  {
    name: 'TypeScript',
    path: '/typescript',
    subpages: [{ name: 'TypeScript Code Notes', path: '/typescript/typescriptcode' }]
  },
  {
    name: 'Servers',
    path: '/servers',
    subpages: [{ name: 'Servers Code Notes', path: '/servers/servercode' }]
  },
  {
    name: 'APIs',
    path: '/apis',
    subpages: [{ name: 'APIs Code Notes', path: '/apis/apicode' }]
  },
  {
    name: 'PostgreSQL',
    path: '/postgresql',
    subpages: [{ name: 'PostgreSQL Code Notes', path: '/postgresql/postgresqlcode' }]
  },
  {
    name: 'React',
    path: '/react',
    subpages: [{ name: 'React Code Notes', path: '/react/reactcode' }]
  },
  {
    name: 'React and TypeScript',
    path: '/reactandtypescript',
    subpages: [{ name: 'React TS Code Notes', path: '/reactandtypescript/reactandtypescriptcode' }]
  },
  {
    name: 'React Full-Stack',
    path: '/reactfullstack',
    subpages: [{ name: 'React Full Stack Code', path: '/reactfullstack/reactfullstackcode' }]
  },
  {
    name: 'MongoDB',
    path: '/mongodb',
    subpages: [
      { name: 'MongoDB Code Notes', path: '/mongodb/mongodbcode' },
    ]
  },
  {
    name: 'MERN',
    path: '/mern',
    subpages: [{ name: 'MERN Code Notes', path: '/mern/merncode' }]
  },
  {
    name: 'Testing',
    path: '/testing',
    subpages: [{ name: 'Testing Code Notes', path: '/testing/testingcode' }]
  },
  {
    name: 'Deployment CI/CD',
    path: '/deploymentcicd',
    subpages: [{ name: 'Deployment CI/CD Code Notes', path: '/deploymentcicd/deploymentcicdcode' }]
  },
  {
    name: 'Python',
    path: '/python',
    subpages: [{ name: 'Python Code Notes', path: '/python/pythoncode' }]
  }
];

const Navigation = () => {

  // State to handle sidebar collapse
  const [isCollapsed, setIsCollapsed] = useState(true);

  // State to manage the visibility of dropdowns
  const [isDropdownOpen, setIsDropdownOpen] = useState<string | null>(null);

  // Toggle sidebar collapse
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);

    if (!isCollapsed) {
      setIsDropdownOpen(null); // Close all dropdowns when collapsing

    }

  };

  // Handle dropdown visibility
  const handleDropdownClick = (menu: string) => {

    if (!isCollapsed) {
      setIsDropdownOpen(isDropdownOpen === menu ? null : menu);
    }
  };

  return (

    <div className={`nav-css ${isCollapsed ? 'collapsed' : ''}`}>

      {/* Button to toggle sidebar */}
      <button className="toggleButton" onClick={toggleSidebar}>

        <i className={`fas ${isCollapsed ? 'fa-bars' : 'fa-bars'}`}></i>

      </button>

      <div className="nav-link-wrapper">

        {pages.map((page) => (

          <div key={page.name}>
            {/* Main page link */}
            <div className="nav-button" onClick={() => handleDropdownClick(page.name)}>

              <Link to={page.path}>{!isCollapsed && page.name}</Link>

            </div>

            {/* Subpages, visible only when expanded */}
            {isDropdownOpen === page.name && !isCollapsed && (

              <div className="dropdown">

                {page.subpages.map((subpage) => (
                  <Link key={subpage.name} to={subpage.path}>{subpage.name}</Link>
                ))}

              </div>

            )}

          </div>

        ))}

      </div>

    </div>
  );
};

export default Navigation;
