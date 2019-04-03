import React from 'react';
import Child1 from './child_1';
import Child2 from './child_2';
class TestAppWrap extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            counter: 0
        };
        this.incrementCount = this.incrementCount.bind(this);
        this.decrementCounter = this.decrementCounter.bind(this);
    }
    incrementCount() {
        this.setState( {
          counter: this.state.counter + 1
        });
    }
    decrementCounter() {
        this.setState( {
          counter: this.state.counter - 1
        });
    }
    render(){
        return(
            <div className="row">
                <div className="container">
                    <div className="col">
                    <h1>{this.state.counter}</h1>
                        <Child1 
                            increment={this.incrementCount}
                            decrement={this.decrementCounter}
                        />
                    </div>
                    <div className="col">
                        <Child2 
                            counter = {this.state.counter}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default TestAppWrap;