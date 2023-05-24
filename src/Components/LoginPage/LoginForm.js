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
      };

      return (

            <form onSubmit= { handleSubmit } className={ style.form }>
                  <h2>Log in</h2>

                  <TextField 
                        name='Email'
                        placeholder='Enter your email'
                        label='Email'
                        value = { formValue.email }
                        onChange= { (value) => setFormValue({ ...formValue, email : value })}
                  />

                  <TextField 
                        name='Password'
                        placeholder='Enter your password'
                        label='Password'
                        value = { formValue.password }
                        onChange= { (value) => setFormValue({ ...formValue, password : value })}
                  />

                  <Button variant="yellow" type='submit'>Log in</Button>
            </form>

      );
}

export default LoginForm;