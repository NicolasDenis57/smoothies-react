import style from './Button.module.css';

const Button = ({ type = 'button', variant = 'primary', onClick, children}) => {

      return (
            <button className={`${style.btn} ${style[variant]}`} type={ type } onClick= { onClick }>
                     { children }
            </button>
      )

}

export default Button