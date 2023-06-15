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
    };
};
//Захиалгыг хадгалах
export const saveOrder = (newOrder) => {
    return function(dispatch){
        dispatch(saveOrderStart());
         axios
            .post("/orders.json", newOrder)
            .then(response => {
                dispatch(saveOrderSuccess());
            })
            .catch(error => {
                dispatch(saveOrderError(error))
            })
    };
};
export const saveOrderStart = () => {
    return{
        type: "SAVE_ORDER_START",
    };
};
export const saveOrderSuccess = () => {
    return{
        type: "SAVE_ORDER_SUCCESS",
    };
};
export const saveOrderError = (error) => {
    return{
        type: "SAVE_ORDER_ERROR",
        error
    };
};
