import React, { Component } from "react";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import { type } from "@testing-library/user-event/dist/type";
class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            cheese: 0,
            bacon: 0,
            meat: 0
        }
    };
    addIngredient = (type) =>{
        const newAddIngredients = { ...this.state.ingredients };
        newAddIngredients[type]++;

        this.setState({ingredients: newAddIngredients});
    }
    removeIngredient = (type) =>{
        if(this.state.ingredients[type] > 0){
            const newRemoveIngredients = { ...this.state.ingredients };
            newRemoveIngredients[type]--;

            this.setState({ingredients: newRemoveIngredients});

        }

    }
    render() {
        const desableIngredient = {...this.state.ingredients};
        for(let key in desableIngredient){
            desableIngredient[key] = desableIngredient[key] <= 0;
            console.log('=== ' + desableIngredient[key]);
        }
        return (
            <div>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    addIngredient={this.addIngredient} 
                    removeIngredient={this.removeIngredient}
                    desableIngredient={desableIngredient}/>
                    
            </div>
        );
    }
}
export default BurgerBuilder;