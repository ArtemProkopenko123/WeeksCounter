import React from 'react';

class BirthdayForm extends React.Component {

    constructor(){
        super();
        if(this.state.day && this.state.month && this.state.year && this.state.year.length === 4 ) this.submit();
    }
    state = {
        day: getCookie('day'),
        month: getCookie('month'),
        year: getCookie('year'),
        error: undefined,
        success: false
    }   

    setValue = async (event) =>{ 
        let target = event.target;
        let name =  target.name ;
        this.setState({ [name]:target.value, error: undefined })
    }
    
    submit() { 
        if(this.state.day && this.state.month && this.state.year && this.state.year.length === 4 ){
            
            new Promise((resolve, reject) => {
                resolve (getWeeksCount(this.state));
            }).then(
                result => { 
                    this.props.submitWeeks(result); 
                    this.setState({success:true});
                    saveCookie(this.state.day,this.state.month,this.state.year);
                })
        }
    }
    changeDate(){
        this.setState({success: false})
    }
    render(){
        return(
            <>
            <div hidden={this.state.success ? false : true}>
                <h3>{this.state.day +" / "+ this.state.month +" / "+ this.state.year}</h3>
                <span>Good weeks: {this.props.weeksMoods.length}</span>
                <button type="button" className="btn btn-link" onClick={this.changeDate.bind(this)}>Change Date</button>
            </div>
            
            <div className=" col-12 form-group m-auto" hidden={this.state.success ? true : false}>
                <label>Day
                <input 
                    type="number"
                    value={this.state.day}
                    onChange={this.setValue}
                    name="day"
                    max="31"
                    min="1"
                    maxLength="2"
                    className="form-control"
                />
                </label>
                <label>Month
                    <input 
                        type="number"
                        value={this.state.month}
                        onChange={this.setValue}
                        name="month"
                        max="12"
                        min="1"
                        maxLength="2"
                        className="form-control"
                    />
                </label>
                <label>Year
                    <input 
                        type="number"
                        value={this.state.year}
                        onChange={this.setValue}
                        name="year"
                        max="2019"
                        maxLength="4"
                        className="form-control"
                    />
                </label>
            </div>
            <div className="col-12 m-auto" hidden={this.state.success ? true : false}>
                <p>{this.state.error}</p>
                <button className="btn btn-dark btn-block" onClick={this.submit.bind(this)}>Enter</button>
                <br/>
            </div>

            </>
        );
    }

}

function getWeeksCount (state){
    // Curent date
  const curentDate = new Date();
  let weeks = (((curentDate.getFullYear() - state.year) * 365) / 7) + (((curentDate.getMonth()+1 - state.month) * 30 ) / 7) - Math.abs(((curentDate.getDate() - state.day ) / 7 ));

  //if((weeks / 52 ) <= 8 )weeks = weeks + 1;
  if((weeks / 52) > 65) weeks = weeks - 1;
            
  return weeks - (weeks / 52 / 8);
};
function saveCookie (day,month,year){
    if(day && month && year) {
        document.cookie = "day =" + day;
        document.cookie = "month = " + month;
        document.cookie = "year = " + year;
    }
}
function getCookie(name) { 
    var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : undefined;
}
export default BirthdayForm;