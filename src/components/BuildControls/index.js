import React from "react";
import BuildControl from "../BuildControl";
import css from "./style.module.css";
const BuildControls = (props) =>{
    
    return (
        <div className={css.BuildControls}>
            <p>Бургерийн үнэ : <strong>{props.price}</strong> </p>
            {
                Object.keys(props.ingredientsNames).map(el => (
                    <BuildControl 
                        key = {el}
                        addIngredient={props.addIngredient} 
                        removeIngredient={props.removeIngredient} 
                        desableIngredient={props.desableIngredient}
                        type={el}
                        ingredient={props.ingredientsNames[el]}
                    />
                ))
            }
            <button disabled={props.disabledOrder} className={css.OrderButton}>Захиалах</button>
        </div>
    );
};

export default BuildControls;