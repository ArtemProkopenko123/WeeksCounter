import React from 'react';


class Child2 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            counter2: 8
        };
        console.log("HELLO: ", props);
    }
    render(){
        return(
            <>
                {this.state.counter2 - this.props.counter}
            </>
        );
    }
    

}
export default Child2;