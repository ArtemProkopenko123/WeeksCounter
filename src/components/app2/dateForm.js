import React from 'react';



class DateForm extends React.Component{


    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){

        let target = event.target;
        if(!isNaN(target.value) ) {
            let dateInput = this.dateInput.value;
            let monthInput = this.monthInput.value;
            let yearInput = this.yearInput.value;

            if(!target.value){
                target.value = 1
            }
            if( (Number(target.max) < Number(target.value) || Number(target.min) > Number(target.value)) ){ 
                return;
            } else {
                this.props.inputEvent(
                    dateInput,
                    monthInput,
                    yearInput
                ); 
            }
        } else { alert("Хорошая попытка, но не сегодня, пидор."); return; }
    }
    render(){
        return(
            <>
            <h3>Please Enter Your Birthday</h3>
                <form >
                    Date: <input 
                        type="number" 
                        value={this.props.inputDate} 
                        ref={(input) => {this.dateInput = input}} 
                        onChange={this.handleChange} 
                        max="31"
                        min="1"
                        maxLength="2"
                    />
                    Month: <input 
                        type="number" 
                        value={this.props.inputMonth} 
                        ref={(input) => {this.monthInput = input}} 
                        onChange={this.handleChange} 
                        max="12"
                        min="1"
                        maxLength="2"
                    />   
                    Year: <input 
                        type="number" 
                        value={this.props.inputYear} 
                        ref={(input) => {this.yearInput = input}} 
                        onChange={this.handleChange} 
                        max="2019"
                        min="1"
                        maxLength="4"
                    /> 

                </form>
                <div className="text-danger">{this.props.error}</div>
                
            </>
        );
    }

}

export default DateForm;
