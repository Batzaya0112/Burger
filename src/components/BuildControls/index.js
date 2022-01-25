import React from "react";
import BuildControl from "../BuildControl";
import css from "./style.module.css";
const BuildControls = (props) =>
    <div className={css.BuildControls}>
        <BuildControl 
            addIngredient={props.addIngredient} 
            removeIngredient={props.removeIngredient} 
            desableIngredient={props.desableIngredient}
            type="salad" 
            ingredient="Салад"/>
        <BuildControl 
            addIngredient={props.addIngredient} 
            removeIngredient={props.removeIngredient}
            desableIngredient={props.desableIngredient}
            type="bacon" 
            ingredient="Гахайн мах"/>
        <BuildControl 
            addIngredient={props.addIngredient} 
            removeIngredient={props.removeIngredient}
            desableIngredient={props.desableIngredient}
            type="cheese" 
            ingredient="Бяслаг"/>
        <BuildControl 
            addIngredient={props.addIngredient}
            removeIngredient={props.removeIngredient} 
            desableIngredient={props.desableIngredient}
            type="meat" 
            ingredient="Үхрийн мах"/>
    </div>
export default BuildControls;