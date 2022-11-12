import {React} from "react";
import { Component } from "react/cjs/react.development";
import Burger from "../../components/Burger";
import Button from "../../components/General/Button";
import {Route} from "react-router-dom";
import ContactData from "../../components/ContactData";
import css from "./style.module.css";

 export class ShippingPage extends Component{

    state = {
        price: 0,
        ingredients: null,
     };
    //Render func  duudagdhaas umnu ajilna.
    componentWillMount(){
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;
        for(let param of query.entries()){
            if(param[0]!== "price"){
                ingredients[param[0]] = param[1];
            }
            else{
                price = param[1];
            }
            
        }
        this.setState({ingredients, price});
    }
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
                    <strong>Дүн: {this.state.price}₮</strong>
                </p>
                <Burger ingredients = {this.state.ingredients}/>
                <Button 
                    clicked={this.cancelOrder} 
                    btnType="Danger" 
                    text="ЗАХИАЛГА ЦУЦЛАХ"/
                >
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
                    <ContactData 
                            ingredients={this.state.ingredients}
                            price = {this.state.price}
                    />
                </Route>
            </div>
         ); 
     }
 }