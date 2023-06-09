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

class BurgerBuilder extends Component {
    state = {
        confirmOrder: false,
    };
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
    render() {
        const desableIngredient = {...this.props.burgeriinOrts};
        for(let key in desableIngredient){
            desableIngredient[key] = desableIngredient[key] <= 0;
        }
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
                        ingredientsNames={this.props.ingredientNames}
                    />
                )}
                </Modal>
                <Burger ingredients={this.props.burgeriinOrts}/>
                <BuildControls 
                    showConfirmModal={this.showConfirmModal}
                    ingredientsNames={this.props.ingredientNames}
                    disabledOrder={!this.props.purchasing}
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
        niitUne: state.totalPrice,
        purchasing: state.purchasing,
        ingredientNames: state.ingredientNames
    };
};
const mapDispatchToProps = dispatch => {
    return {
        burgertOrtsNem: ortsNer => dispatch(actions.addIngredient(ortsNer)),
        burgereesOrtsHas: ortsNer => dispatch(actions.removeIngredient(ortsNer))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);