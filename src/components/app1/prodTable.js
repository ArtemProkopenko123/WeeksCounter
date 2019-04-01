import React from 'react';
import ProductCatRow from './prodCatRow';
import ProdRow from './prodRow';

class ProdTable extends React.Component {

    render () {

        let rows = [];
        let lastCat = null;
        console.log(this.props.products);
        this.props.products.forEach((product) => {
            if(product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)){
                return;
            }
            if(product.category !== lastCat) {
                rows.push(<ProductCatRow category={product.category} key={product.category} />);
            }
            rows.push(<ProdRow product={product} key={product.name} />);
            lastCat = product.category;
        });
        return (
            <table className="text-center m-auto">
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Price
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        )
    }
}


export default ProdTable;