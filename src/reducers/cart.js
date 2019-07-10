import * as types from '../constands/ActionType';

var data = JSON.parse(localStorage.getItem('Cart'));

const InitialState = data ? data : [];



const cart = (state = InitialState, action) => {
    var {product, quantity, id} = action;

    switch (action.type) {
        case types.ADD_TO_CART:    
            var index = findIndexProductInCart(state, product);
            if (index !== -1){
                state[index].quantity += quantity;                              
            }else{
                state.push({
                   product,
                   quantity
                })
            }  
            localStorage.setItem('Cart', JSON.stringify(state));
            return [...state]; 
        case types.DELETE_PRODUCT_IN_CART:
            var index = findIndexProductInCartByID(state, id);
            state.splice(index,1);
            localStorage.setItem('Cart', JSON.stringify(state));
            return [...state]; 
        case types.UPDATE_PRODUCT_IN_CART:
            var index = findIndexProductInCart(state, product);
            state[index].quantity = quantity;
            localStorage.setItem('Cart', JSON.stringify(state));
            return [...state]
        default:
            return [...state];
    }
};

var findIndexProductInCart = (cart, product) =>{
    var index= -1;

    if(cart.length > 0){
        for (let i = 0; i < cart.length; i++){
            if (cart[i].product.id === product.id){
                index = i;
                break;
            }
        }
    }
    return index;
}
var findIndexProductInCartByID = (cart, id) =>{
    var index= -1;

    if(cart.length > 0){
        for (let i = 0; i < cart.length; i++){
            if (cart[i].product.id === id){
                index = i;
                break;
            }
        }
    }
    return index;
}

export default cart;