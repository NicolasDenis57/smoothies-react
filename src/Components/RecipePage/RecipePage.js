import Recipes from '../UI/Recipes/Recipes'
import style from './RecipePage.module.css'

const recipes = [
      {
            name:'Banana Boost',
            ingredients:'Banana, Vanilla ice cream, Milk',
            img:'/smoothie.png'
      },
      {
            name:'Tropical Twist',
            ingredients:'Banana, Vanilla ice cream, Milk',
            img:'/smoothie.png'
      },
      {
            name:'Protein packer',
            ingredients:'Banana, Vanilla ice cream, Milk',
            img:'/smoothie.png'
      },
      {
            name:'Banana Boost',
            ingredients:'Banana, Vanilla ice cream, Milk',
            img:'/smoothie.png'
      },
      {
            name:'Tropical Twist',
            ingredients:'Banana, Vanilla ice cream, Milk',
            img:'/smoothie.png'
      },
      {
            name:'Protein packer',
            ingredients:'Banana, Vanilla ice cream, Milk',
            img:'/smoothie.png'
      },
]

const RecipePage = () => {

      return (
            <>
              <ul className={style.recipes}>
                {recipes.map((recipe, index) => (
                  <Recipes key={index} recipe={recipe} />
                ))}
              </ul>
            </>
          );
};

export default RecipePage;