import { Field, Form, Formik } from "formik";
import { useId } from "react";
import Button from "../UI/Button/Button";
import style from "../UI/Forms/Forms.module.css";
import * as Yup from 'yup';
import axios from '../../Api/axios';
import useAuth from '../../hooks/useAuth'
import { useNavigate, useLocation } from 'react-router-dom';


const LOGIN_URL = '/login';

const LoginForm = () => {

      const { setAuth } = useAuth();

      const navigate = useNavigate();
      const location = useLocation();
      const from = location.state?.from?.pathname || "/";

      const id = useId();

      const LoginFormSchema = Yup.object().shape({
            email: Yup.string()
            .required('This field is required'),
            password: Yup.string()
            .required('This field is required'),
      });

      const handleSubmit = async (values) => {
            
            try {
                  const response = await axios.post(LOGIN_URL, values, 
                                   { 
                                         headers: { 'Content-Type' : 'application/json'},
                                         withCredentials : true
                                   }
                  );
                  console.log('response.data : ', response.data)

              const accessToken = response?.data?.accessToken;

              const role = response?.data?.role;

              setAuth({ user: values.email, role, accessToken});
              
              navigate(from, { replace:true });
            } catch (error) {
              console.log("Request failed with error:", error);
            }
      };
      return (
            <Formik
                  initialValues={{
                        email: 'admin@admin.fr',
                        password: '!P@ssw0rd!',
                  }}

                  onSubmit={ handleSubmit }
                  validationSchema={ LoginFormSchema }
            >

                  {
                        ({ errors, touched }) => (
                              <Form>
                                    <h2>Login</h2>
                                    
                                          <label className={style.label}>Email</label>
                                          <Field 
                                                name='email'
                                                type='email'
                                                id={`${id}-email`}
                                                className={style.input}
                                          />
                                          { errors.email && touched.email && <p style={{ color: 'red'}}>{ errors.email}</p>}
                                    
                                    
                                          <label className={style.label}>Password</label>
                                          <Field 
                                                name='password'
                                                type='password'
                                                id={`${id}-password`}
                                                className={style.input}
                                          />
                                          { errors.password && touched.password && <p style={{ color: 'red'}}>{ errors.password}</p>}
                                    
                                    
                                    <Button variant="yellow" type='submit'>Log In</Button>
                                    
                              </Form>
                        )
                  }

            </Formik>


      );
}

export default LoginForm;