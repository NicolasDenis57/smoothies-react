import { useState } from "react";
import TextField from "../UI/Forms/TextField";
import Button from "../UI/Button/Button";
import style from "../UI/Forms/Forms.module.css";
import * as Yup from 'yup';

const SignUpForm = ({ value, index}) => {

      const [formErrors, setFormErrors] = useState({});

      const [ formValue, setFormValue ] = useState(value ? value : {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            confirmPassword: '',
      });

      const SignUpFormSchema = Yup.object().shape({
            firstname: Yup.string()
            .min(2)
            .required('Ce champ est requis'),
            lastname: Yup.string()
            .min(2)
            .required('Ce champ est requis'),
            email: Yup.string()
            .email('Format d\'email invalide')
            .required('Ce champ est requis'),
            password: Yup.string()
            .min(10)
            .matches(
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                  'Le mot de passe doit contenir au moins une lettre minuscule, une lettre majuscule, un chiffre et un caractère spécial'
            )
            .required('Ce champ est requis'),
            confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Les mots de passe doivent correspondre')
            .required('Ce champ est requis'),
      });



      const handleSubmit = async (event) => {
            event.preventDefault();
            console.log("Form Values:", formValue); 

            try {
                  await SignUpFormSchema.validate(formValue, { abortEarly: false });
                  console.log('Validation réussie');
                  // Soumettre les données du formulaire ou effectuer d'autres actions
                } catch (errors) {
                  console.log('Erreurs de validation:', errors);
                  const validationErrors = {};
                  errors.inner.forEach((error) => {
                    validationErrors[error.path] = error.message;
                  });
                  setFormErrors(validationErrors);
                }
            
      };

      return (

            <form onSubmit= { handleSubmit } className={ style.form }>
                  <h2>Sign up</h2>

                  <TextField 
                        name='Firstname'
                        label='Firstname'
                        value = { formValue.firstname }
                        onChange= { (value) => setFormValue({ ...formValue, firstname : value })}
                        type='text'
                        error={formErrors.firstname}
                  />

                  <TextField 
                        name='Lastname'
                        label='Lastname'
                        value = { formValue.lastname }
                        onChange= { (value) => setFormValue({ ...formValue, lastname : value })}
                        type='text'
                        error={formErrors.lastname}
                  />

                  <TextField 
                        name='Email'
                        label='Email'
                        value = { formValue.email }
                        onChange= { (value) => setFormValue({ ...formValue, email : value })}
                        type='email'
                        error={formErrors.email}
                  />

                  <TextField 
                        name='Password'
                        label='Password'
                        value = { formValue.password }
                        onChange= { (value) => setFormValue({ ...formValue, password : value })}
                        type='password'
                        error={formErrors.password}
                  />

                  <TextField 
                        name='ConfirmPassword'
                        label='Confirm Password'
                        value = { formValue.confirmPassword }
                        onChange= { (value) => setFormValue({ ...formValue, confirmPassword : value })}
                        type='password'
                        error={formErrors.confirmPassword}
                  />

                  <Button variant="yellow" type='submit'>Sign Up</Button>
            </form>

      );
}

export default SignUpForm;