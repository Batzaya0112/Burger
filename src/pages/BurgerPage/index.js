import React, { Component } from "react";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";
//import axios from "axios";
import axios from "../../axios-orders"
import Spinner from "../../components/General/Spinner";
//import { type } from "@testing-library/user-event/dist/type";
const INGREDIENT_PRICES = {salad: 150, cheese: 250, bacon: 800, meat: 1500};
const INGREDIENT_NAMES = {
    salad: "Салад",
    bacon: "Гахай мах",
    cheese: "Бяслаг",
    meat: "Үхрийн мах"
};
class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            cheese: 0,
            bacon: 0,
            meat: 0
        },
        totalPrice: 0,
        purchasing: false,
        confirmOrder: false,
        lastCustomerName: "N/A",
        loading: false
    };

    componentDidMount = () =>{
        this.setState({loading: true});
        axios.get('/orders.json').then( response => {
            const arr = Object.entries(response.data);
            arr.forEach(el => {
                console.log(el[1].addres.name + " ==> " + el[1].price);
            });
            //Хамгийн сүүлийн захиалгыг харуулах
            const lastOrder = arr[arr.length -1][1];
            this.setState({ingredients: lastOrder.ingredients, 
                           totalPrice: lastOrder.price,
                           lastCustomerName: lastOrder.addres.name 
            });
        }).catch(err => console.log(err)).finally(()=>{
            this.setState({loading: false});
        });
    }

    continueOrder = () => {
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            addres: {
                name: 'Сүрэн',
                city: 'Ulaanbaatar'
            }
        };
        //axios tsaanaa proms ashigladag
        //zahialga firabase deer hadgalana
        this.setState({loading: true});
        axios.post('/orders.json', order).then(response => {
           // alert("amjittai");
        }).finally(()=>{
            this.setState({loading: false});
        })
    }
    showConfirmModal = () => {
        this.setState({confirmOrder: true });
    };
    closeConfirmModal = () => {
        this.setState({confirmOrder: false });
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
                <Modal closeConfirmModal={this.closeConfirmModal} 
                       show={this.state.confirmOrder}>
                {this.state.loading ? <Spinner/> : (
                    <OrderSummary 
                        onCancel={this.closeConfirmModal}
                        onContinue={this.continueOrder}
                        price={this.state.totalPrice}
                        ingredients={this.state.ingredients}
                        ingredientsNames={INGREDIENT_NAMES}
                    />
                )}
                   
                </Modal>

                {this.state.loading && <Spinner />}

                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    showConfirmModal={this.showConfirmModal}
                    ingredientsNames={INGREDIENT_NAMES}
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