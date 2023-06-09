import React, { Component } from "react";
import {connect} from "react-redux";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";
//import axios from "axios";
//import axios from "../../axios-orders"
import Spinner from "../../components/General/Spinner";
import * as actions from "../../redux/actions/burgerActions";
//import { type } from "@testing-library/user-event/dist/type";
const INGREDIENT_PRICES = {salad: 150, cheese: 250, bacon: 800, meat: 1500};
const INGREDIENT_NAMES = {
    salad: "Салад",
    bacon: "Гахайн мах",
    cheese: "Бяслаг",
    meat: "Үхрийн мах"
};
class BurgerBuilder extends Component {
    state = {
        purchasing: false,
        confirmOrder: false,
    };

    componentDidMount = () =>{
        
    }

    continueOrder = () => {
        const params = [];
        for(let orts in this.props.burgeriinOrts){
            params.push(orts + "=" + this.props.burgeriinOrts[orts]);
        }

        params.push("price=" + this.this.props.niitUne);

        const query = params.join("&");
        this.props.history.push({
         pathname: "ship",
         search: query
        });
        this.closeConfirmModal();
    };
    showConfirmModal = () => {
        this.setState({confirmOrder: true });
    };
    closeConfirmModal = () => {
        this.setState({confirmOrder: false });
    };
    addIngredient = (type) =>{
        const newAddIngredients = { ...this.props.burgeriinOrts };
        newAddIngredients[type]++;
        const newPrice = this.this.props.niitUne + INGREDIENT_PRICES[type];
        this.setState({purchasing: true, totalPrice: newPrice, ingredients: newAddIngredients});
    }
    removeIngredient = (type) =>{
        if(this.props.burgeriinOrts[type] > 0){
            const newRemoveIngredients = { ...this.props.burgeriinOrts };
            newRemoveIngredients[type]--;
            const newPrice = this.this.props.niitUne - INGREDIENT_PRICES[type];
            this.setState({purchasing: newPrice > 0, totalPrice: newPrice, ingredients: newRemoveIngredients});
        }

    }
    render() {
        console.log(this.props);
        const desableIngredient = {...this.props.burgeriinOrts};

        for(let key in desableIngredient){
            desableIngredient[key] = desableIngredient[key] <= 0;
        }
        console.log("test redux", this.props);
        return (
            <div>
                <Modal closeConfirmModal={this.closeConfirmModal} 
                       show={this.state.confirmOrder}>
                {this.state.loading ? <Spinner/> : (
                    <OrderSummary 
                        onCancel={this.closeConfirmModal}
                        onContinue={this.continueOrder}
                        price={this.props.niitUne}
                        ingredients={this.props.burgeriinOrts}
                        ingredientsNames={INGREDIENT_NAMES}
                    />
                )}
                   
                </Modal>

                <Burger ingredients={this.props.burgeriinOrts}/>
                <BuildControls 
                    showConfirmModal={this.showConfirmModal}
                    ingredientsNames={INGREDIENT_NAMES}
                    disabledOrder={!this.state.purchasing}
                    price={this.props.niitUne}
                    addIngredient={this.props.burgertOrtsNem} 
                    removeIngredient={this.props.burgereesOrtsHas}
                    desableIngredient={desableIngredient}/>
                    
            </div>
        );
    }
}
const mapStateToProps = state =>{
    return {
        burgeriinOrts: state.ingredients,
        niitUne: state.totalPrice
    };
};
const mapDispatchToProps = dispatch => {
    return {
        burgertOrtsNem: ortsNer => dispatch(actions.addIngredient(ortsNer)),
        burgereesOrtsHas: ortsNer => dispatch(actions.removeIngredient(ortsNer))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);