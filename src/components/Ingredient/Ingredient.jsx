export default function Ingredient({ ingredient, index, onClick, buttonText }) {
  return (
    <li key={index} style={{ backgroundColor: ingredient.color }}>
      {ingredient.name}
      <button type="button" onClick={onClick}>
        {buttonText}
      </button>
    </li>
  );
}
