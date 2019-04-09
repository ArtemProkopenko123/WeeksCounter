import React from 'react';


class Child2 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            counter2: 8
        };
        console.log("HELLO: ", props);
    }
    sentVal(val){
        this.props.getVal(val);
    }
    showAlert(val) {
        console.log("ALERT: " , val.target.value);
        
      }
    render(){
        return(
            <>
                <h3>Child 2: {this.state.counter2 } - {this.props.counter} = {this.state.counter2 - this.props.counter}</h3> 
                
                <button onClick={this.sentVal(((this.state.counter2 - this.props.counter) * 7 )+ 1000)}>SENT VAL</button>
                <button onClick={this.showAlert.bind()} value="BUTTON VALUE">show alert</button>
            </>
        );
    }
}
export default Child2;