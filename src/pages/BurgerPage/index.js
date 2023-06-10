import React, { Component } from "react";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";
//import axios from "axios";
//import axios from "../../axios-orders"
import Spinner from "../../components/General/Spinner";
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

        return (
            <div>
                <Modal closeConfirmModal={this.closeConfirmModal} 
                       show={this.state.confirmOrder}>
                {this.state.loading ? <Spinner/> : (
                    <OrderSummary 
                        onCancel={this.closeConfirmModal}
                        onContinue={this.continueOrder}
                    />
                )}
                </Modal>
                <Burger/>
                <BuildControls 
                    showConfirmModal={this.showConfirmModal}
                    disabledOrder={!this.props.purchasing}
                />
            </div>
        );
    }
}

export default BurgerBuilder;