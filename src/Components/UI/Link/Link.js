import { Link as RouterLink } from 'react-router-dom';
import style from './Link.module.css';

const Link = ({ to, variant = 'primary', children}) => {

        return (
                <RouterLink to={ to } className={`${style[variant]}`}>
                     { children }
                </RouterLink>
        );
};

export default Link;