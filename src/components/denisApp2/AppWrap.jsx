import React from 'react';
import BirthdayForm from './BirthdayForm';
import TableHeader from './TableHeader';
import TableRow   from './TableRow';

export default class AppWrap extends React.Component{

        constructor(){
            super();
            this.state = {
                weeks: undefined,
                weeksMoods: getCookie('weekMoods')
            };
            this.setWeeks = this.setWeeks.bind(this);
            this.getMood = this.getMood.bind(this);
            console.log("AAA",getCookie('weekMoods'));
        }


    
    setWeeks(val){
        this.setState({
            weeks: val
        });
    }
    getMood(val){
        saveCookie('weekMoods', this.state.weeksMoods);
        if(this.state.weeksMoods.includes(val)){
            this.state.weeksMoods.splice( this.state.weeksMoods.indexOf(val), 1 );
            this.setState({
                weeksMoods: this.state.weeksMoods
            });
            return;
        } else {
            if(!this.state.weeksMoods){
                this.setState({
                    weeksMoods: val
                });
                return;
            } else { 
                this.setState(prevState => ({
                    weeksMoods: [...prevState.weeksMoods, val]
                }));
                return;
            }
        }

    }
    render(){
        return(

            <div className="col-12 m-0 p-0 text-center">
                <BirthdayForm 
                    submitWeeks={this.setWeeks}
                    weeksMoods={this.state.weeksMoods}
                />
                <table className="tftable table" border="1">
                    <thead>
                        <TableHeader
                            weeks={this.state.weeks}
                        />
                    </thead>
                    <tbody>
                        <TableRow
                            weeks={this.state.weeks}
                            weeksMoods={this.state.weeksMoods}
                            sentMood={this.getMood}
                        />
                    </tbody>
                </table>
            </div>
        );
    }
}
function saveCookie (key,data){
    if(key && data) {
        if(typeof data == 'object') data = JSON.stringify(data);
        document.cookie = key+" = " + data;
    }
}


function getCookie(name) {
    var matches = document.cookie.match(name);
    return matches ? matches : []
  }

