import React from "react";
import BuildControl from "../BuildControl";
import css from "./style.module.css";
import {connect} from "react-redux";
import * as actions from "../../redux/actions/burgerActions";

const BuildControls = (props) =>{
    const desableIngredient = {...props.ingredients};
    for(let key in desableIngredient){
        desableIngredient[key] = desableIngredient[key] <= 0;
    }
    return (
        <div className={css.BuildControls}>
            <p>Бургерийн үнэ : <strong>{props.price}</strong> </p>
            {
                Object.keys(props.ingredientNames).map(el => (
                    <BuildControl 
                        key = {el}
                        addIngredient={props.addIngredient} 
                        removeIngredient={props.removeIngredient} 
                        desableIngredient={desableIngredient}
                        type={el}
                        ingredient={props.ingredientNames[el]}
                    />
                ))
            }
            <button 
                //synthetic
                onClick={props.showConfirmModal} 
                disabled={!props.purchasing} 
                className={css.OrderButton}
            >
                Захиалах
            </button>
        </div>
    );
};
const mapStateToProps = state =>{
    return {
        ingredients: state.burgerReducer.ingredients,
        price: state.burgerReducer.totalPrice,
        purchasing: state.burgerReducer.purchasing,
        ingredientNames: state.burgerReducer.ingredientNames
    };
};
const mapDispatchToProps = dispatch => {
    return {
        addIngredient: ortsNer => dispatch(actions.addIngredient(ortsNer)),
        removeIngredient: ortsNer => dispatch(actions.removeIngredient(ortsNer))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(BuildControls);