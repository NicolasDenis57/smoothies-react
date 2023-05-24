import { Field, Form, Formik } from "formik";
import { useId } from "react";
import Button from "../UI/Button/Button";
import style from "../UI/Forms/Forms.module.css";
import * as Yup from 'yup';
import axios from "axios";



const SignUpForm = () => {

      const id = useId();

      const SignUpFormSchema = Yup.object().shape({
            firstname: Yup.string()
            .min(2)
            .matches(/^[a-zA-Z]+(?:[-\s][a-zA-Z]+)?$/, 'Invalid format. Only letters, spaces, or at most one hyphen (-) allowed between words')
            .required('This field is required'),
            lastname: Yup.string()
            .min(2)
            .matches(/^[a-zA-Z]+(?:[-\s][a-zA-Z]+)?$/, 'Invalid format. Only letters, spaces, or at most one hyphen (-) allowed between words')
            .required('This field is required'),
            email: Yup.string()
            .email('Invalid email format')
            .matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, 'Invalid email format')
            .required('This field is required'),
            password: Yup.string()
            .min(10)
            .matches(
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                  'The password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character'
            )
            .required('This field is required'),
            confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'passwords must match')
            .required('This field is required'),
      });

      const handleSubmit = async (values) => {
            try {
              const response = await axios.post("http://localhost:3001/users", values);
              console.log(response.data); // Response from the server
            } catch (error) {
              console.log("Request failed with error:", error);
            }
          };

      return (
            <Formik
                  initialValues={{
                        firstname: '',
                        lastname: '',
                        email: '',
                        password: '',
                        confirmPassword: ''
                  }}

                  onSubmit={ handleSubmit }
                  validationSchema={ SignUpFormSchema }
            >

                  {
                        ({ errors, touched }) => (
                              <Form className={style.form}>
                                    <h2>Sign up</h2>
                                    
                                          <label className={style.label}>Firstname</label>
                                          <Field 
                                                name='firstname'
                                                type='text'
                                                id={`${id}-firstname`}
                                                className={style.input}
                                          />
                                          { errors.firstname && touched.firstname && <p style={{ color: 'red'}}>{ errors.firstname }</p>}

                                    
                                    
                                          <label className={style.label}>Lastname</label>
                                          <Field 
                                                name='lastname'
                                                type='text'
                                                id={`${id}-lastname`}
                                                className={style.input}
                                                
                                          />
                                          { errors.lastname && touched.lastname && <p style={{ color: 'red'}}>{ errors.lastname}</p>}
                                    
                                    
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
                                    
                                    
                                          <label className={style.label}>Confirm Password</label>
                                          <Field
                                                name='confirmPassword'
                                                type='password'
                                                id={`${id}-confirmPassword`}
                                                className={style.input}
                                          />
                                          { errors.confirmPassword && touched.confirmPassword && <p style={{ color: 'red'}}>{ errors.confirmPassword}</p>}
                                    
                                    <Button variant="yellow" type='submit'>Sign Up</Button>

                              </Form>
                        )
                  }




            </Formik>


      );
}

export default SignUpForm;