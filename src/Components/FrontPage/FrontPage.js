import Link from '../UI/Link/Link';
import smoothieImage from './smoothie.png';
import style from './FrontPage.module.css';


const FrontPage = () => {

        return (
               <header className={style.header}>
                  <div>
                        <img src={ smoothieImage } alt="A beautiful smoothie"/>
                  </div>
                  <div>
                        <h2>Smoothie Recipes</h2>
                        <h3>By Ninjas For Ninjas</h3>
                        <Link variant="yellow" to={'/smoothies'}>View recipes</Link>
                  </div>
               </header>
        );
};

export default FrontPage;