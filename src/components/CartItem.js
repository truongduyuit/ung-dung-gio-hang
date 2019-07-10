import React, { Component } from 'react';
import * as Message from '../constands/Message';

class CartItem extends Component {

    constructor(props){
        super(props);

        this.state ={
            quantity: 1
        }
    }

    showTotal = (price, quantity) => {
        return price * quantity;
    }

    onDeleteProduct= id =>{
        this.props.onDeleteProduct(id);
        this.props.onChangeMessage(Message.MSG_DELETE_CART_SUCCESS);
    }

    onUpdateCart = (product, quantity) =>{
        if (quantity > 0){
            this.setState({
                quantity : quantity
            });
            this.props.onUpdateProductInCart(product, quantity);
            this.props.onChangeMessage(Message.MSG_UPDATE_CART_SUCCESS);
        }  
    }

    render() {

        var { item } = this.props;
        var {quantity} = this.state;

        return (
                <tr>
                    <th scope="row">
                        <img src={item.product.image} alt={item.product.name} className="img-fluid z-depth-0" />
                    </th>
                    <td>
                        <h5>
                            <strong>{item.product.name}</strong>
                        </h5>
                    </td>
                    <td>{item.product.price} $</td>
                    <td className="center-on-small-only">
                        <span className="qty">{quantity}</span>
                        <div className="btn-group radio-group" data-toggle="buttons">
                            <label className="btn btn-sm btn-primary
                                btn-rounded waves-effect waves-light"  
                                onClick = {() => this.onUpdateCart(item.product, item.quantity-1)}                             
                            >
                                <a>—</a>
                            </label>
                            <label className="btn btn-sm btn-primary
                                btn-rounded waves-effect waves-light"
                                onClick = {() => this.onUpdateCart(item.product, item.quantity+1)}
                            >
                                <a >+</a>
                            </label>
                        </div>
                    </td>
                    <td> {this.showTotal(item.product.price, item.quantity)} $</td>
                    <td>
                        <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                            title="" data-original-title="Remove item" 
                            onClick = {() =>this.onDeleteProduct(item.product.id)}
                        >
                            X
                        </button>
                    </td>
                </tr>

        );
    }
}

export default CartItem;