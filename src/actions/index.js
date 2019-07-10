import * as type from '../constands/ActionType';

export const actAddToCart = (product, quantity) =>{
     return {
         type: type.ADD_TO_CART,
         product,
         quantity
     }
}

export const actChangeMessage = message =>{
    return {
        type: type.CHANGE_MESSAGE,
        message
    }
}

export const actDeleteProductInCart = id =>{
    return {
        type: type.DELETE_PRODUCT_IN_CART,
        id
    }
}

export const actUpdateProductInCart = (product, quantity) =>{
    return {
        type: type.UPDATE_PRODUCT_IN_CART,
        product,
        quantity
    }
}