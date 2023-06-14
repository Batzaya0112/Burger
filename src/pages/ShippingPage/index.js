import React, {Component} from "react";
//import { Component } from "react/cjs/react.development";
import Burger from "../../components/Burger";
import Button from "../../components/General/Button";
import {Route} from "react-router-dom";
import ContactData from "../../components/ContactData";
import css from "./style.module.css";
import {connect}  from "react-redux";

 class ShippingPage extends Component{
    //Render func  duudagdhaas umnu ajillana.
    cancelOrder = () => {
        this.props.history.goBack();
    }
    showContactData = () => {
        this.props.history.replace('/ship/contact');
    }
    render(){
        return(
            <div className={css.ShippingPage}> 
                <p style={{fontSize: "24px"}}>
                    <strong>Таны захиалга</strong>
                </p>
                <p style={{fontSize: "21px"}}>
                    <strong>Дүн: {this.props.price}₮</strong>
                </p>
                <Burger/>
                <Button 
                    clicked={this.cancelOrder} 
                    btnType="Danger" 
                    text="ЗАХИАЛГА ЦУЦЛАХ"
                />
                <Button 
                    clicked={this.showContactData} 
                    btnType="Success" 
                    text="ХҮРГЭЛТИЙН МЭДЭЭЛЭЛ ОРУУЛАХ"
                />
                {/* <Route path="/ship/contact" component={ContactData} /> */}
                {/* <Route 
                    path="/ship/contact" 
                    render = {() =>(
                        <ContactData 
                            ingredients={this.state.ingredients}
                            price = {this.state.price}
                        />
                    )}
                /> */}
                <Route path="/ship/contact" >
                    <ContactData/>
                </Route>
            </div>
        ); 
    }
}
const mapStateToProps = state =>{
    return{
        price: state.burgerReducer.totalPrice
    }
}
export default connect(mapStateToProps)(ShippingPage);