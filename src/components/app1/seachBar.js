import React from 'react';

class SearchBar extends React.Component {

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(){
 
        this.props.onUserInput(
            this.filterTextInput.value,
            this.inStockOnlyInput.checked
        );
    }

    render(){
        return(
            <form>
                <input 
                    type="text" 
                    placeholder="Search..." 
                    value={this.props.filterText} 
                    ref={(input) => {this.filterTextInput = input}} 
                    onChange={this.handleChange} 
                />
                <p>
                    <input 
                        type="checkbox"
                        checked={this.props.inStockOnly}
                        ref={(input) => this.inStockOnlyInput = input}
                        onChange={this.handleChange}
                    />
                    {''}
                    Only Show Product In Stock
                </p>
            </form>
        )
    }


}

export default SearchBar;