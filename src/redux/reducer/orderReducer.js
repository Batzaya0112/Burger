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
        loading: false
};
const reducer = (state = initialState, action) =>{
    if(action.type === "LOAD_ACTIONS"){
        return{
            ...state,
            loading: true
        };
    }
    return state;
};
export default reducer;