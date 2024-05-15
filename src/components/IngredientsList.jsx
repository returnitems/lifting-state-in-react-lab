// src/components/IngredientList.jsx
import { availableIngredients } from "../App";


const IngredientList = ({addToBurger}) => {
    return (
        <ul>
          {availableIngredients.map((ingredient, index) => (
            <li key={index} style={{backgroundColor: ingredient.color}}>
                {ingredient.name} 
                <button onClick={() => addToBurger(ingredient)}>+</button>
            </li>
          ))}
        </ul>
    );
};

export default IngredientList;