import {Link, useLocation} from 'react-router-dom';

export default function Navigation() {
    const currentPage = useLocation().pathname;

    return (

        <div>

        <ul className='nav-css'>

            <li className='nav-item'>

                <Link
                to='/'
                className={currentPage === '/' ? "nav-link active" : "nav-link"}
                >
                    
                HTML
                
                </Link>

            </li>

            <li className='nav-item'>

                <Link
                to='/css'
                className={currentPage === "/css" ? "nav-link active" : "nav-link"}
                >
                    
                CSS
                
                </Link>

            </li>

            <li className='nav-item'>

                <Link
                to='/javascript'
                className={currentPage === "/javascript" ? "nav-link active" : "nav-link"}
                >
                    
                JavaScript
                
                </Link>

            </li>   

        </ul>

        </div>
    )
}