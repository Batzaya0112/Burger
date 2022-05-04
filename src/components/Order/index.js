import React from "react";
import css from "./styel.module.css";

const Order = (props) =>{
    return (
        <div className={css.Order}>
            <p>Орц: Гахайн мах - {props.order.ingredients.bacon}, Бяслаг - {props.order.ingredients.cheese}, Үхрийн мах - {props.order.ingredients.meat}, Салад - {props.order.ingredients.salad}</p>
            <p>Хаяг: {props.order.addres.name} | {props.order.addres.city} </p>
            <p>Үнийн дүн: <strong>{props.order.price}₮</strong> </p>
        </div>
    );
}

export default Order;