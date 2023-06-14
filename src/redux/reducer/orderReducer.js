const initialState = {
        orders: [
            [
                "-NXYlZEQRwueMPXhOBFT",
                {
                    addres:{ city: "Darkhan",name: "Bat",street:"01"},
                    ingredients:{ bacon: 1, cheese :1, meat :0, salad :2},
                    price: 1350
                }
            ],
        ],
        loading: false,
        error: null
};
const reducer = (state = initialState, action) =>{
    if(action.type === "LOAD_ORDERS_START"){
        return{
            ...state,
            loading: true
        };
    }else if(action.type === "LOAD_ORDERS_SUCCES"){
        return {
            ...state,
            loading: false,
            orders: action.orders
        }
    }else if(action.type === "LOAD_ORDERS_ERROR"){
        return {
            ...state,
            loading: false,
            error: action.error
        }
    }
    return state;
};
export default reducer;