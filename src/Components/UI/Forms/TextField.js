import { useId } from 'react';
import style from './TextField.module.css';

const TextField = ({ label, name, placeholder, validation, value, onChange, onError }) => {

      const id = useId();

      const handleChange = (event) => {
            const { value } = event.target;
            
            onChange(value);
      }
      return (
            <>
                  <label className={ style.label } htmlFor={ id }>{ label } </label>
                  <input type="text" name={ name } className={ style.input } placeholder={ placeholder } value={ value } onChange={ handleChange } />
            </>
      );
};

export default TextField;