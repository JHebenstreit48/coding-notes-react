import {Link, useLocation} from 'react-router-dom';

export default function Navigation() {
    const currentPage = useLocation().pathname;

    return (

        <div>

        <ul>

            <li className='nav-item'>

                <Link
                to='/'
                className={currentPage === '/' ? 'active' : ''}
                >
                    
                HTML
                
                </Link>

            </li>

            <li className='nav-item'>

                <Link
                to='/css'
                className={currentPage === '/css' ? 'active' : ''}
                >
                    
                CSS
                
                </Link>

            </li>

            <li className='nav-item'>

                <Link
                to='/javascript'
                className={currentPage === '/javascript' ? 'active' : ''}
                >
                    
                JavaScript
                
                </Link>

            </li>   

        </ul>

        </div>
    )
}