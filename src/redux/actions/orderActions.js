import axios from "../../axios-orders";
export const loadOrders = () =>{
    // thunk нь зөвхөн функц барьж авдаг
    return function(dispatch){
        // Захиалгыг татаж эхэллээ гэдгийг мэдэгдэнэ.
        // Энийг хүлээж аваад Spinner ажиллаж эхлэнэ.
        dispatch(loadOrdersStart());
        axios
        .get('/orders.json')
        .then( response => {
            const loadedOrders = Object.entries(response.data).reverse();
            dispatch(loadOrdersSuccess(loadedOrders));
            })
        .catch(err => dispatch(loadOrdersError(err)));
    } 
};
export const loadOrdersStart = () => {
    return{
        type: "LOAD_ORDERS_START"
    }
}
export const loadOrdersSuccess = (loadedOrders) => {
    return{
        type: "LOAD_ORDERS_SUCCES",
        orders: loadedOrders
    }
}
export const loadOrdersError = (error) => {
    return{
        type: "LOAD_ORDERS_ERROR",
        error
    }
}
