import React from "react";
import BuildControl from "../BuildControl";
import css from "./style.module.css";
const BuildControls = (props) =>{
    const controls = {
        salad: "Салад",
        bacon: "Гахай мах",
        cheese: "Бяслаг",
        meat: "Үхрийн мах"
    };
    return (
        <div className={css.BuildControls}>
            <p>Бургерийн үнэ : <strong>{props.price}</strong> </p>
            {
                Object.keys(controls).map(el => (
                    <BuildControl 
                        key = {el}
                        addIngredient={props.addIngredient} 
                        removeIngredient={props.removeIngredient} 
                        desableIngredient={props.desableIngredient}
                        type={el}
                        ingredient={controls[el]}
                    />
                ))
            }
            <button disabled={props.disabledOrder} className={css.OrderButton}>Захиалах</button>
        </div>
    );
};

export default BuildControls;