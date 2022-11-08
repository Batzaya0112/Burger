import {React} from "react";
import { Component } from "react/cjs/react.development";
import Burger from "../../components/Burger";
import Button from "../../components/General/Button";
import {Route} from "react-router-dom";
import ContactData from "../../components/ContactData";
import css from "./style.module.css";

 export class ShippingPage extends Component{

    state = {
        
        ingredients: {
            salad: 0,
            cheese: 0,
            bacon: 0,
            meat: 0
        }
     };
    
    componentDidMount(){
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        for(let param of query.entries()){
            ingredients[param[0]] = param[1];
        }
        this.setState({ingredients});
    }
    goBack = () => {
        this.props.history.goBack();
    }
    showContactData = () => {
        this.props.history.push('/ship/contact');
    }
     render(){
         return(
            <div className={css.ShippingPage}> 
                <p style={{fontSize: "24px"}}>
                    <strong>Таны захиалга</strong>
                </p>
                <Burger ingredients = {this.state.ingredients}/>
                <Button 
                    clicked={this.goBack} 
                    btnType="Danger" 
                    text="ЗАХИАЛГА ЦУЦЛАХ"/
                >
                <Button 
                    clicked={this.showContactData} 
                    btnType="Success" 
                    text="ХҮРГЭЛТИЙН МЭДЭЭЛЭЛ ОРУУЛАХ"
                />
                <Route path="/ship/contact" component={ContactData} />
            </div>
         ); 
     }
 }