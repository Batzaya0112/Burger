import React from "react";
import Button from "../General/Button";
import css from "./style.module.css";
import axios from "../../axios-orders";
import Spinner from "../General/Spinner";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import * as action from '../../redux/actions/orderActions';

class ContactData extends React.Component{
    state = {
        name: null,
        city: null,
        street: null
     };
     changeName = (event) =>{
        this.setState({name: event.target.value});
     };
     changeStreet = (event) =>{
        this.setState({street: event.target.value});
     };
     changeCity = (event) =>{
        this.setState({city: event.target.value});
     };
     saveOrder = () =>{
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            addres: {
                name: this.state.name,
                city: this.state.city,
                street: this.state.street
            }
        };
        //axios tsaanaa proms ashigladag
        //zahialga firabase deer hadgalana
        this.props.saveOrderAction(order);
        // this.setState({loading: true});
       
     };
    componentDidUpdate(){
        if(this.props.newOrderStatus.finished && !this.props.newOrderStatus.error){
            this.props.history.replace("/orders");
        }
    };
    render (){
        return(
            <div className={css.ContactData}>
                    <div>
                        {this.props.newOrderStatus.error && `Захиалга хадгалах явцад алдаа гарлаа : ${this.props.newOrderStatus.error }`}
                    </div>
                    {this.props.newOrderStatus.saving ? <Spinner /> : (
                        <div>
                            <input 
                                onChange={this.changeName} 
                                type="text" name="name" 
                                placeholder="Таны нэр" />
                            <input 
                                onChange={this.changeStreet} 
                                type="text" name="street" 
                                placeholder="Таны гэрийн хаяг" />
                            <input 
                                onChange={this.changeCity}
                                type="text" 
                                name="city" 
                                placeholder="Хот" />
                            <Button text="ИЛГЭЭХ" btnType="Success" clicked={this.saveOrder}/>
                        </div>
                    )}
                    
            </div>
        ); 
    }
}
const mapStateToProps = state => {
    return{
        price: state.burgerReducer.totalPrice,
        ingredients: state.burgerReducer.ingredients,
        newOrderStatus: state.orderReducer.newOrder

    }
}
const mapDispatchToProps = dispatch => {
    return {
        saveOrderAction: (newOrder) => dispatch(action.saveOrder(newOrder))
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ContactData));