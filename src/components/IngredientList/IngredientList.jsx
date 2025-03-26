import Ingredient from "../Ingredient/Ingredient";

function IngredientList({ ingredients, addIngredient }) {
  return (
    <ul>
      {ingredients.map((ingredient, index) => {
        return (
          <Ingredient
            key={index}
            ingredient={ingredient}
            index={index}
            onClick={() => addIngredient(ingredient)}
            buttonText="+"
          />
        );
      })}
    </ul>
  );
}

export default IngredientList;
