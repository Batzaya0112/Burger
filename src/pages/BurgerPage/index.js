import React, { Component } from "react";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import Modal from "../../components/General/Modal";
//import { type } from "@testing-library/user-event/dist/type";
const INGREDIENT_PRICES = {salad: 150, cheese: 250, bacon: 800, meat: 1500};
class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            cheese: 0,
            bacon: 0,
            meat: 0
        },
        totalPrice: 0,
        purchasing: false
    };
    addIngredient = (type) =>{
        const newAddIngredients = { ...this.state.ingredients };
        newAddIngredients[type]++;
        const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
        this.setState({purchasing: true, totalPrice: newPrice, ingredients: newAddIngredients});
    }
    removeIngredient = (type) =>{
        if(this.state.ingredients[type] > 0){
            const newRemoveIngredients = { ...this.state.ingredients };
            newRemoveIngredients[type]--;
            const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
            this.setState({purchasing: newPrice > 0, totalPrice: newPrice, ingredients: newRemoveIngredients});
        }

    }
    render() {
        const desableIngredient = {...this.state.ingredients};
        for(let key in desableIngredient){
            desableIngredient[key] = desableIngredient[key] <= 0;
        }
        return (
            <div>
                <Modal>
                   <h1>Та итгэлтэй байна уу...</h1> 
                   <p>Захиалгын дэлгэрэнгүй</p>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    disabledOrder={!this.state.purchasing}
                    price={this.state.totalPrice}
                    addIngredient={this.addIngredient} 
                    removeIngredient={this.removeIngredient}
                    desableIngredient={desableIngredient}/>
                    
            </div>
        );
    }
}
export default BurgerBuilder;