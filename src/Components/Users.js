import { useState, useEffect, useContext } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useNavigate, useLocation } from "react-router-dom";

import AuthContext from "../context/AuthProvider";

const Users = () => {
      const { setAuth } = useContext(AuthContext);
      const [ users, setUsers ] = useState();
      
      const axiosPrivate = useAxiosPrivate();
      const navigate = useNavigate();
      const location = useLocation();
     
      useEffect(() => {
            let isMounted = true;
            const controller = new AbortController();
           
            const getUsers = async () => {
                  try {
                        const response = await axiosPrivate.get('/users', {
                              signal : controller.signal
                        });
                        isMounted && setUsers(response.data);
                  } catch(err) {
                        console.error(err)
                        setAuth({});
                        navigate('/login', { state: { from : location }, replace: true });
                  }
            }

            getUsers();

            return () => {
                  isMounted = false;
                  controller.abort();
            }
      }, [])

      return (
            <article>
                  <h2>Users List</h2>
                  {users?.length
                        ? (
                              <ul>
                                    {users.map((user, index) => <li key={index}>{user?.email}</li>)}
                              </ul>
                        ) : <p>No users to display</p>
                  }
                  
            </article>
      );
};

export default Users;