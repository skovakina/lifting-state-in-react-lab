const BurgerStack = ({ stack, removeIngredient }) => {
  return (
    <ul>
      {stack.map((ingredient, index) => {
        return (
          <li key={index} style={{ backgroundColor: ingredient.color }}>
            {ingredient.name}
            <button type="button" onClick={() => removeIngredient(index)}>
              -
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default BurgerStack;
