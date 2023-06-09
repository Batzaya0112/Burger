const INGREDIENT_PRICES = {salad: 150, cheese: 250, bacon: 800, meat: 1500};
const initialjState = {
    ingredients: {
        salad: 0,
        cheese: 0,
        bacon: 0,
        meat: 0
    },
    totalPrice: 0
}
const reducer =(state = initialjState, action) => {
    if(action.type  === "ADD_INGREDIENT"){
        return{
            ingredients: {
                ...state.ingredients,
                [action.ortsNer]: state.ingredients[action.ortsNer] + 1
            },
            totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ortsNer]
        }
    }else if(action.type  === "REMOVE_INGREDIENT"){
        return{
            ingredients: {
                ...state.ingredients,
                [action.ortsNer]: state.ingredients[action.ortsNer] - 1
            },
            totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ortsNer]
        }  
    }

    return state;
}
export default reducer;