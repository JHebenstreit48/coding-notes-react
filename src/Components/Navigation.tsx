import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../CSS/Navigation.css';
// Define an array of page objects with subpages

const pages = [
  {
    name: 'HTML',
    subpages: [
      {
        name: 'HTML Notes',
        path: '/html'
      },
      {
        name: 'HTML Code Notes',
        path: '/htmlcode'
      },
    ]
  },
  {
    name: 'CSS',
    subpages: [
      {
        name: 'CSS Notes',
        path: '/css'
      },
      {
        name: 'CSS  Code Notes',
        path: '/css/csscode'
      },
    ],
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
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const closeSidebar = () => {
    setIsCollapsed(true);
  }

  return (

    <div className={`nav-css ${isCollapsed ? 'collapsed' : ''}`}>

      {/* Button to toggle sidebar */}
      <button className="toggleButton" onClick={toggleSidebar}>

        <i className={`fas ${isCollapsed ? 'fa-bars' : 'fa-bars'}`}></i>

      </button>

      <div className={`nav-css ${isCollapsed ? 'collapsed' : ''}`}>
      {/* Toggle Button */}
      <button className="toggleButton" onClick={toggleSidebar}>
        <i className={`fas ${isCollapsed ? 'fa-bars' : 'fa-times'}`}></i>
      </button>

      {/* Navigation Content */}
      {!isCollapsed && (
        <div className="nav-content">
          {/* Home Button */}
          <div className="home-button">
            <Link to="/" className="nav-link" onClick={closeSidebar}>
              Home
            </Link>
          </div>

          {/* Accordion for Pages */}
          <div id="accordionExample" className="accordion">
            {pages.map((page, index) => (
              <div key={page.name} className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${index}`}
                    aria-expanded="false"
                    aria-controls={`collapse${index}`}
                  >
                    {page.name}
                  </button>
                </h2>
                <div
                  id={`collapse${index}`}
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    {page.subpages.map((subpage) => (
                      <p key={subpage.name}>
                        <Link
                          to={subpage.path}
                          className="nav-link"
                          onClick={closeSidebar}
                        >
                          {subpage.name}
                        </Link>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  </div>
  );
}

export default Navigation;
