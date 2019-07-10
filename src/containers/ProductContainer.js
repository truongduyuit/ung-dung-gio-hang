import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import ProductList from '../components/ProductList';
import Product from '../components/Product';
import {actAddToCart, actChangeMessage} from '../actions/index';


class ProductContainer extends Component {

    showProducts(products){
        var result = null;
        var {onAddToCart, onChangeMessage,onDeleteProduct} = this.props;
        if (products.length > 0){
            result = products.map((product, index)=>{
                return (
                    <Product 
                        key = {index}
                        product = {product}
                        onAddToCart = {onAddToCart}
                        onChangeMessage = {onChangeMessage}
                    />
                )
            });
        }
        return result;
    }

    render() {
        var {products} = this.props;
        return (
            <ProductList showProducts = {this.showProducts(products)}/>
        );
    }
}

ProductContainer.propTypes = {
    products : PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        })
    ).isRequired,
    onChangeMessage : PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: product => {
            dispatch(actAddToCart(product, 1))
        },
        onChangeMessage: message =>{
            dispatch(actChangeMessage(message))
        }        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);