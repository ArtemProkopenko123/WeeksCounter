import React from "react";


class ProductCatRow extends React.Component {
    render() {
        return (<tr><th colSpan="2">{this.props.category}</th></tr>);
    }
}

export default ProductCatRow;