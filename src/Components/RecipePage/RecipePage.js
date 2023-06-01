import { useState, useEffect, useContext } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useNavigate, useLocation } from "react-router-dom";

import AuthContext from "../../context/AuthProvider";

import Recipes from '../UI/Recipes/Recipes'
import style from './RecipePage.module.css'


const RecipePage = () => {
  const { setAuth } = useContext(AuthContext);
  const [recipes, setRecipes] = useState([]);

  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getRecipes = async () => {
      try {
        const response = await axiosPrivate.get('/recipes', {
          signal: controller.signal
        });

        // Convertir le BYTEA en URL pour chaque recette
        const recipesWithImageUrl = await Promise.all(response.data.map(async (recipe) => {
          const imageBlob = new Blob([new Uint8Array(recipe.img.data)], { type: 'image/jpeg' });
          const imageUrl = URL.createObjectURL(imageBlob);
          return { ...recipe, imageUrl };
        }));

        isMounted && setRecipes(recipesWithImageUrl);
      } catch (err) {
        console.error(err)
        setAuth({});
        navigate('/login', { state: { from: location }, replace: true });
      }
    }

    getRecipes();

    return () => {
      isMounted = false;
      controller.abort();
    }
  }, []);

  return (
    <>
      {recipes?.length ? (
        <ul className={style.recipes}>
          {recipes.map((recipe, index) => (
            <Recipes key={index} recipe={recipe} />
          ))}
        </ul>
      ) : (
        <p>No recipes to display</p>
      )}
    </>
  );
};

export default RecipePage;