import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Cart from '../components/Cart';
import CartItem from '../components/CartItem';
import CartResult from '../components/CartResult';
import { actDeleteProductInCart, actChangeMessage, actUpdateProductInCart } from '../actions';
import * as Message from '../constands/Message';

class CartContainer extends Component {

    showCartItem = cart =>{
        var {onDeleteProduct, onChangeMessage, onUpdateProductInCart} = this.props;
        
        var result = <tr>
            <td>{Message.MSG_CART_EMPTY}</td>
        </tr>;

        if (cart.length > 0){
            result = cart.map((item,index) => {
                return (
                    <CartItem 
                        key= {index} 
                        item = {item}
                        onDeleteProduct = {onDeleteProduct}
                        onChangeMessage = {onChangeMessage}
                        onUpdateProductInCart = {onUpdateProductInCart}
                    />
                );
            })
        }

        return result;
    }

    showTotalAmount= cart =>{
        var result = 0;
        if (cart.length > 0){
            result = <CartResult cart = {cart}/>;
            return result;
        } 
        return null;
    }

    render() {
        var {cart} = this.props;
      
        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showTotalAmount(cart)}
            </Cart>
        );
    }
}

CartContainer.propTypes = {
    cart : PropTypes.arrayOf(
        PropTypes.shape({
            product : PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                inventory: PropTypes.number.isRequired,
                rating: PropTypes.number.isRequired
            }).isRequired,
            quantity : PropTypes.number.isRequired
        })
    ).isRequired,
    onChangeMessage : PropTypes.func.isRequired,
    onUpdateProductInCart : PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onDeleteProduct: (id) => {
            dispatch(actDeleteProductInCart(id))
        },
        onChangeMessage: message =>{
            dispatch(actChangeMessage(message))
        },
        onUpdateProductInCart: (product, quantity) =>{
            dispatch(actUpdateProductInCart(product, quantity))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);