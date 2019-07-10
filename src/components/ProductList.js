import React, { Component } from 'react';

class ProductList extends Component {

    render() {
        return (
            <section className="section">
                <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                <div className="row">
                    {this.props.showProducts}
                </div>
            </section>

        );
    }
}


export default ProductList;