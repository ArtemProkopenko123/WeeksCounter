import React from 'react';

class TableRow extends React.Component{

    
    createRow = (props) => { 
            // Alert("НЕ ПРАВИЛЬНОЕ ОКРУГЛЕНИЕ !! ОТКЛЮЧИТЬ ЕГО И ПРОВЕРИТЬ");
        let stateVal = props.state;
        let weeks = undefined; 
            // Waiting for the correct input's dates
        if(stateVal.inputDate && stateVal.inputMonth && (stateVal.inputYear.length === 4) ){
            weeks = this.getWeeksCount(stateVal);
        }
        let tr = [];
        let lastItem;

            // Outer loop to create row
        for (let year = 0; year < 91; year++) {
            
          let children = [];
                // Minus one day each 5 years
  
                //Inner loop to create children
            for (let j = 1; j < 53; j++) {
                    // Culculate total count of the weeks
                if(year>0) lastItem += 1; else lastItem = j;
                    
                    // Set class name if td is active
                if(weeks && lastItem <= weeks)
                    children.push(<td onClick={this.props.setMood} className="active" id={lastItem.toString()} key={lastItem.toString()}>{lastItem}</td>)
                else children.push(<td id={lastItem.toString()} key={lastItem.toString()}>{lastItem}</td>)

                
            }
                //Create the parent and add the children
            tr.push(<tr key={year.toString()}><th className="bg-dark text-white">{year}</th>{children}</tr>)
            
        }
        
        return tr;
    }
        // Check if the year is divided without float
    checkIfInteger(x, y) {
        if (Number.isInteger(y / x)) {
          return true;
        }
        return false;
    }
      

    getWeeksCount(state){
        
            // Curent date
        const curentDate = new Date();
        let weeks = (((curentDate.getFullYear() - state.inputYear) * 365) / 7) + (((curentDate.getMonth()+1 - state.inputMonth) * 30 ) / 7) - Math.abs(((curentDate.getDate() - state.inputDate ) / 7 ));

        //if((weeks / 52 ) <= 8 )weeks = weeks + 1;
        if((weeks / 52) > 65) weeks = weeks - 1;
        return  weeks - (weeks / 52 / 8);
    }


    render() {
        return(
            <>
                {this.createRow(this.props)}
            </>
        )
    }
    
}

export default TableRow;



