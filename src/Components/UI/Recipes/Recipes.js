import style from "./Recipes.module.css";

const Recipes = ({ recipe }) => {
  return (
    <li className={style.recipe}>
      <img src={recipe.imageUrl} alt="smoothie recipe icon" />
      <h4>{recipe.name}</h4>
      <p>{recipe.ingredients}</p>
    </li>
  );
};

export default Recipes;