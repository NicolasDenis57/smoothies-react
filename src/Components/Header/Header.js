import { useContext } from "react";
import './Header.module.css'
import Link from '../UI/Link/Link';
import axios from '../../Api/axios'
import { useNavigate } from 'react-router-dom';


import AuthContext from "../../context/AuthProvider";
import jwtDecode from 'jwt-decode';


const getEmailFromToken = (token) => {
  
      try {
        const decodedToken = jwtDecode(token);
        if (decodedToken && decodedToken.email) {
          return decodedToken.email;
        }
      } catch (error) {
        console.log('Error decoding token:', error);
      }
      return '';
    };



const Header = () => {

      const { auth, setAuth } = useContext(AuthContext);
      const navigate = useNavigate();
         
      const logout = async () => {
            
            await axios.get('/logout',
                  { 
                        headers: { 'Content-Type' : 'application/json'},
                        withCredentials : true

                  })
                  
                  setAuth({});
                  navigate('/'); 
                 
                  
            }

            let emailFromToken = '';
            if (auth.accessToken) {
                emailFromToken = getEmailFromToken(auth.accessToken);
            }


    

        return (
            <nav>
              <h1><Link variant="page-title" to={'/'}>Ninja Smoothies</Link></h1>
              <ul>
              {auth.accessToken && (
                <li>
                  Welcome, {emailFromToken}
                </li>
              )}
              
              {auth.accessToken && (
  <>
    {auth.role === 'admin' && (
      <li>
        <Link to={'/admin'}>Admin</Link>
      </li>
    )}
    <li>
      <button onClick={logout}>Logout</button>
    </li>
  </>
)}

{!auth.accessToken && (
  <>
    <li>
      <Link to={'/login'}>Log in</Link>
    </li>
    <li>
      <Link variant="yellow" to={'/signup'}>Sign up</Link>
    </li>
  </>
)}
              </ul>
            </nav>
          );
};

export default Header;

