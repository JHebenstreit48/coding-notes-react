import { Link, useLocation } from 'react-router-dom'
import '../CSS/Navigation.css'
import { useRef } from "react"

interface NavigationLinks {
    to: string
    pageTitle: string
}

const ListItems = ({ to, pageTitle, isActive }: NavigationLinks & { isActive: boolean }) => {
    return (
        <div className={`nav-button ${isActive ? 'active' : ''}`}>
            <Link to={to}>{pageTitle}</Link>
        </div>
    )
}

export default function Navigation() {
    const currentTab = useLocation().pathname;
    const navRef = useRef<HTMLDivElement>(null);

    const navLinks = [
        { pageTitle: 'HTML', path: '/' },
        { pageTitle: 'CSS', path: '/css' },
        { pageTitle: 'Git', path: '/git' },
        { pageTitle: 'JavaScript', path: '/javascript' },
        { pageTitle: 'Web APIs', path: '/webapis' },
        { pageTitle: 'Node', path: '/node' },
        { pageTitle: 'TypeScript', path: '/typescript' },
        { pageTitle: 'Servers', path: '/servers' },
        { pageTitle: 'APIs', path: '/apis' },
        { pageTitle: 'PostgreSQL', path: '/postgresql' },
        { pageTitle: 'React', path: '/react' },
        { pageTitle: 'React TS', path: '/reactandtypescript' },
        { pageTitle: 'React FS', path: '/fullstackreact' },
        { pageTitle: 'MongoDB', path: '/mongodb' },
    ]

    const scroll = (scrollOffset: number) => {
        if (navRef.current) {
            navRef.current.scrollLeft += scrollOffset
        }
    }

    return (
        <>
            <div className="nav-container">
                <div className="nav-css">
                    <div>
                        <button className="btn scroll-arrow left-arrow" onClick={() => scroll(-200)}>&lt;</button>
                    </div>

                    <div ref={navRef} className="nav-link-wrapper">
                        {navLinks.map(link => (
                            <ListItems
                                key={link.pageTitle}
                                to={link.path}
                                pageTitle={link.pageTitle}
                                isActive={currentTab === link.path}
                            />
                        ))}
                    </div>

                    <div>
                        <button className="btn scroll-arrow right-arrow" onClick={() => scroll(200)}>&gt;</button>
                    </div>
                </div>
            </div>
        </>
    )
}
