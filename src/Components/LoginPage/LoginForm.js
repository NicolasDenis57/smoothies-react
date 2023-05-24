import { Field, Form, Formik } from "formik";
import { useId } from "react";
import Button from "../UI/Button/Button";
import style from "../UI/Forms/Forms.module.css";
import * as Yup from 'yup';
import axios from 'axios';



const LoginForm = () => {

      const id = useId();

      const LoginFormSchema = Yup.object().shape({
            email: Yup.string()
            .required('This field is required'),
            password: Yup.string()
            .required('This field is required'),
      });

      const handleSubmit = async (values) => {
            try {
              const response = await axios.post(`${process.env.REACT_APP_API_URL}/login`, values);
              console.log(response.data); // Response from the server
            } catch (error) {
              console.log("Request failed with error:", error);
            }
      };

      return (
            <Formik
                  initialValues={{
                        email: '',
                        password: '',
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