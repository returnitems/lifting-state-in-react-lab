// `src/components/BurgerStack.jsx`


const BurgerStack = ({stack, removeFromBurger}) => {
    return (
        <ul>
            {stack.map((item, index) => (
                <li key={index} style={{backgroundColor: item.color}}>
                    {item.name}
                    <button onClick={() => removeFromBurger(index)}>X</button>
                </li>
            ))}
        </ul>
    )
};

export default BurgerStack;