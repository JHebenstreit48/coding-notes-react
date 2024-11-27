import { Link } from "react-router-dom";
import { useState } from "react";
// Define an array of page objects with subpages

const pages = [
  {
    name: "Home",
    subpages: [],
  },
  {
    name: "HTML",
    subpages: [
      {
        name: "HTML Notes",
        path: "/html",
      },
      {
        name: "HTML Code Notes",
        path: "/htmlcode",
      },
    ],
  },
  {
    name: "CSS",
    subpages: [
      {
        name: "CSS Notes",
        path: "/css",
      },
      {
        name: "CSS  Code Notes",
        path: "/css/csscode",
      },
    ],
  },
  {
    name: "Git",
    subpages: [
      {
        name: "Git Notes",
        path: "/git",
      },
      {
        name: "Git Code Notes",
        path: "/git/gitcode",
      },
    ],
  },
  {
    name: "JavaScript",
    subpages: [
      {
        name: "JavaScript Notes",
        path: "/javascript",
      },
      {
        name: "JavaScript Code Notes",
        path: "/javascript/javascriptcode",
      },
    ],
  },
  {
    name: "Node",
    subpages: [
      {
        name: "Node.JS Notes",
        path: "/node",
      },
      {
        name: "Node.JS Code Notes",
        path: "/node/nodecode",
      },
    ],
  },
  {
    name: "TypeScript",
    subpages: [
      {
        name: "TypeScript Notes",
        path: "/typescript",
      },
      {
        name: "TypeScript Code Notes",
        path: "/typescript/typescriptcode",
      },
    ],
  },
  {
    name: "Servers",
    subpages: [
      {
        name: "Servers Notes",
        path: "/servers",
      },
      {
        name: "Servers Code Notes",
        path: "/servers/servercode",
      },
    ],
  },
  {
    name: "APIs",
    subpages: [
      {
        name: "APIs Notes",
        path: "/apis",
      },
      {
        name: "APIs Code Notes",
        path: "/apis/apicode",
      },
    ],
  },
  {
    name: "PostgreSQL",
    subpages: [
      {
        name: "PostgreSQL Notes",
        path: "/postgresql",
      },
      {
        name: "PostgreSQL Code Notes",
        path: "/postgresql/postgresqlcode",
      },
    ],
  },
  {
    name: "React",
    subpages: [
      {
        name: "React Notes",
        path: "/react",
      },
      {
        name: "React Code Notes",
        path: "/react/reactcode",
      },
      {
        name: "React and TypeScript",
        path: "/react/reactandtypescript",
      },
      {
        name: "Reace and TypeScript Code",
        path: "/react/reactandtypescriptcode",
      },
      {
        name: "React Full Stack",
        path: "/react/reactfullstack",
      },
      {
        name: "React Full Stack Code",
        path: "/react/reactfullstackcode",
      },
      {
        name: "React Native",
        path: "/react/reactnative",
      },
      {
        name: "React Native Code",
        path: "/react/reactnativecode",
      },
    ],
  },
  {
    name: "MongoDB",
    subpages: [
      {
        name: "MongoDB Notes",
        path: "/mongodb",
      },
      {
        name: "MongoDB Code Notes",
        path: "/mongodb/mongodbcode",
      },
    ],
  },
  {
    name: "MERN",
    subpages: [
      {
        name: "MERN Notes",
        path: "/mern",
      },
      {
        name: "MERN Code Notes",
        path: "/mern/merncode",
      },
    ],
  },
  {
    name: "Testing",
    subpages: [
      {
        name: "Testing Notes",
        path: "/testing",
      },
      {
        name: "Testing Code Notes",
        path: "/testing/testingcode",
      },
      {
        name: "Vitest Testing",
        path: "/testing/vitesttesting",
      },
      {
        name: "Vitest Testing Code",
        path: "/testing/vitesttestingcode",
      },
      {
        name: "Cypress Testing",
        path: "/testing/cypresstesting",
      },
      {
        name: "Cypress Testing Code",
        path: "/testing/cypresstestingcode",
      },
    ],
  },
  {
    name: "CI/CD Ops",
    subpages: [
      {
        name: "CI/CD Ops",
        path: "/cicdops",
      },
      {
        name: "CI/CD Ops Code",
        path: "/cicdops/cicdopscode",
      },
    ],
  },
  {
    name: "Python",
    subpages: [
      {
        name: "Python Notes",
        path: "/python",
      },
      {
        name: "Python Code Notes",
        path: "/python/pythoncode",
      },
    ],
  },
  {
    name: "Angular",
    subpages: [
      {
        name: "Angular Notes",
        path: "/angular",
      },
      {
        name: "Angular Code Notes",
        path: "/angular/angularcode",
      }
    ],
  },
  {
    name: "Redux",
    subpages: [
      {
        name: "Redux Notes",
        path: "/redux",
      },
      {
        name: "Redux Code Notes",
        path: "/redux/reduxcode",
      },
    ],
  },
  {
    name: "Vue",
    subpages: [
      {
        name: "Vue Notes",
        path: "/vue",
      },
      {
        name: "Vue Code Notes",
        path: "/vue/vuecode",
      },
    ],
  },
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
  };

  return (
    <div className={`nav-css ${isCollapsed ? "collapsed" : ""}`}>
      {/* Toggle Button */}
      <button className="toggleButton" onClick={toggleSidebar}>
        {isCollapsed ? (
          <i className="menu-icon fas fa-bars " aria-hidden="false"></i>
        ) : (
          <i className="close-icon fas fa-times " aria-hidden="false"></i>
        )}
      </button>

      {!isCollapsed && (
        <div className="nav-content">
          {/* Accordion for Pages */}
          <div className="accordion">
            {pages.map((page, index) => (
              <div key={page.name} className="accordion-item">
                <h2 className="accordion-header">
                  {/* Check if the page has subpages */}
                  {page.subpages.length === 0 ? (
                    // Render the Home button with unique ID
                    <Link
                      to="/"
                      className="accordion-button no-dropdown"
                      id="home-button"
                      onClick={closeSidebar}
                    >
                      {page.name}
                    </Link>
                  ) : (
                    // Render regular accordion buttons with dropdowns
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
                  )}
                </h2>

                {/* Only render subpages if they exist */}
                {page.subpages.length > 0 && (
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
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;
