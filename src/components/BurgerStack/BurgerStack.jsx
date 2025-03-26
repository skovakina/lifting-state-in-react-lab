import Ingredient from "../Ingredient/Ingredient";
function BurgerStack({ stack, removeIngredient }) {
  return (
    <ul>
      {stack.map((ingredient, index) => {
        return (
          <Ingredient
            key={index}
            ingredient={ingredient}
            index={index}
            onClick={() => removeIngredient(index)}
            buttonText="-"
          />
        );
      })}
    </ul>
  );
}

export default BurgerStack;
