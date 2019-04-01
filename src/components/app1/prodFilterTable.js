import React from "react";
import SearchBar from "./seachBar";
import ProdTable from "./prodTable";

class ProdFilterTable extends React.Component {
    

    constructor(props){
        super(props);
        
        this.state = {
            filterText: '',
            inStockOnly: false
        };
        this.getData = this.getData();
        this.handleUserInput = this.handleUserInput.bind(this);
    }

    getData (){
        return require('./../../db.json');
        
    }

    handleUserInput(filterText, inStockOnly){
        
        this.setState({
            filterText: filterText,
            inStockOnly: inStockOnly
        });
    }
    render(){
        return(
            
            <div>
                <SearchBar
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    onUserInput={this.handleUserInput}
                />
                <ProdTable 
                    products={this.getData.products}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                />
            </div>
        )
    }
}


export default ProdFilterTable;