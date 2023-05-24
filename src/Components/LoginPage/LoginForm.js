import { useState } from "react";
import TextField from "../UI/Forms/TextField";
import Button from "../UI/Button/Button";
import style from "../UI/Forms/Forms.module.css";


const LoginForm = ({ value, index}) => {

     
      
      const [ formValue, setFormValue ] = useState(value ? value : {
            email: '',
            password: '',
      });

      const handleSubmit = (event) => {
            event.preventDefault();
            
            console.log("Form Values:", formValue); 
      };

      return (

            <form onSubmit= { handleSubmit } className={ style.form }>
                  <h2>Log in</h2>

                  <TextField 
                        name='Email'
                        label='Email'
                        value = { formValue.email }
                        onChange= { (value) => setFormValue({ ...formValue, email : value })}
                        type='email'
                  />

                  <TextField 
                        name='Password'
                        label='Password'
                        value = { formValue.password }
                        onChange= { (value) => setFormValue({ ...formValue, password : value })}
                        type='password'
                  />

                  <Button variant="yellow" type='submit'>Log in</Button>
            </form>

      );
}

export default LoginForm;