const IngredientList = ({ ingredients, addIngredient }) => {
  return (
    <ul>
      {ingredients.map((ingredient, index) => {
        return (
          <li key={index} style={{ backgroundColor: ingredient.color }}>
            {ingredient.name}
            <button type="button" onClick={() => addIngredient(ingredient)}>
              +
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default IngredientList;
