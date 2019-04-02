import React from 'react';
import DateForm from './dateForm';
import TableRow from './tableRow';
import TableHeader from './tableHeader';

export default class AppWrap extends React.Component {


    constructor(props){
        super(props)
        // Main state
        this.state = {
            inputDate: '1',
            inputMonth: '4',
            inputYear: '2018',
            error: undefined
        };
        this.handler = this.handler.bind(this);

        this.setMood = this.setMood.bind(this);
    }
    handler(inputDate,inputMonth,inputYear) {
        // Validate input's dates to set or remove error message 
        if( (this.state.inputDate && !inputDate) || (this.state.inputMonth && !inputMonth) || (this.state.inputYear && !inputYear) ) 
            this.setState({
                inputDate: inputDate,
                inputMonth:inputMonth,
                inputYear:inputYear,
                error: "Введите дату"
            });
        else {
            this.setState({
                inputDate: inputDate,
                inputMonth:inputMonth,
                inputYear:inputYear,
                error: ""
            });
        }
        // Validate year date 
        if(Number(inputYear) < 1930 && this.state.inputYear && inputYear.length === 4){
            this.setState({
                error: "Введите правильный год рождения"
            });
        }
    }
    setMood (event){
        this.setState({
            weekId: event.target.id
        })
    }
    render(){
        return(
            <div className=" text-center m-auto">

                <DateForm 
                    inputEvent={this.handler}
                    inputDate={this.state.inputDate}
                    inputMonth={this.state.inputMonth}
                    inputYear={this.state.inputYear}
                    error={this.state.error} // sent the error
                />
                <br/>
                <div className="col-10 m-auto">
                    <table className="tftable table" border="1">
                        <thead>
                            <TableHeader/>
                        </thead>
                        <tbody>
                            <TableRow
                                state = {this.state}
                                setMood = {this.setMood}
                            />
                        </tbody>
                    </table>
                </div>
                
            </div>
        );
    }

}


