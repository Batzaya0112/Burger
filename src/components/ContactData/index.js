import React from "react";
import Button from "../General/Button";
import css from "./style.module.css";
import axios from "axios";
import Spinner from "../General/Spinner";
import {withRouter} from "react-router-dom";

class ContactData extends React.Component{
    state = {
        name: null,
        city: null,
        street: null,
        loading: false,
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
            price: this.props.totalPrice,
            addres: {
                name: this.state.name,
                city: this.state.city,
                street: this.state.street
            }
        };
        //axios tsaanaa proms ashigladag
        //zahialga firabase deer hadgalana
        this.setState({loading: true});
        axios
            .post('/orders.json', order)
            .then(response => {
                console.log("zahialga amjilttai");
            })
            .catch(error => {
                console.log("zahilaga amjiltgui: " + error)
            }).finally(()=>{
                this.setState({loading: false});
                this.props.history.replace('/orders');
            });
     };
    render (){
        console.log("contactDAta "+ this.props);
        return(
            <div className={css.ContactData}>
                    {this.state.loading ? <Spinner /> : (
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
                                placeholder="Дүүрэг" />
                            <Button text="ИЛГЭЭХ" btnType="Success" clicked={this.saveOrder}/>
                        </div>
                    )}
                    
            </div>
        ); 
    }
}

export default withRouter(ContactData);