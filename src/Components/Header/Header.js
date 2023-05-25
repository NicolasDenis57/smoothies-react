import './Header.module.css'
import Link from '../UI/Link/Link';

const Header = () => {

        return (
                
                        <nav>
                              <h1><Link variant="page-title" to={'/'}>Ninja Smoothies</Link></h1>
                                    <ul>
                                          <li>
                                                Welcome, 'user.email '
                                          </li>
                                          <li>
                                                <Link to={'/logout'}>Log out</Link>
                                          </li>
                                          <li>
                                                <Link to={'/login'}>Log in</Link>
                                          </li>
                                          <li>
                                                <Link to={'/admin'}>Admin</Link>
                                          </li>
                                          <li>
                                                <Link variant="yellow" to={'/signup'}>Sign up</Link>
                                          </li>
                                    </ul>
                        </nav>
                
        );
};

export default Header;