import { useState } from "react";
import TextField from "../UI/Forms/TextField";
import Button from "../UI/Button/Button";
import style from "../UI/Forms/Forms.module.css";

const SignUpForm = ({ value, index}) => {

      const [ formValue, setFormValue ] = useState(value ? value : {
            email: '',
            password: '',
      });

      const handleSubmit = (event) => {
            event.preventDefault();
      };

      return (

            <form onSubmit= { handleSubmit } className={ style.form }>
                  <h2>Sign up</h2>

                  <TextField 
                        name='Firstname'
                        label='Firstname'
                        value = { formValue.firstname }
                        onChange= { (value) => setFormValue({ ...formValue, firstname : value })}
                  />

                  <TextField 
                        name='Lastname'
                        label='Lastname'
                        value = { formValue.lastname }
                        onChange= { (value) => setFormValue({ ...formValue, lastname : value })}
                  />

                  <TextField 
                        name='Email'
                        label='Email'
                        value = { formValue.email }
                        onChange= { (value) => setFormValue({ ...formValue, email : value })}
                  />

                  <TextField 
                        name='Password'
                        label='Password'
                        value = { formValue.password }
                        onChange= { (value) => setFormValue({ ...formValue, password : value })}
                  />

                  <TextField 
                        name='ConfirmPassword'
                        label='Confirm Password'
                        value = { formValue.confirmPassword }
                        onChange= { (value) => setFormValue({ ...formValue, confirmPassword : value })}
                  />

                  <Button variant="yellow" type='submit'>Sign Up</Button>
            </form>

      );
}

export default SignUpForm;