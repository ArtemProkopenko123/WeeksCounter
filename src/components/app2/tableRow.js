import React from 'react'


class TableRow extends React.Component{


    createRow = (props) => {
            // Alert("НЕ ПРАВИЛЬНОЕ ОКРУГЛЕНИЕ !! ОТКЛЮЧИТЬ ЕГО И ПРОВЕРИТЬ");
        let stateVal = props.state;
        let weeks = undefined; 
        let divStyle;
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
                if(weeks && lastItem <= weeks){ divStyle = 'active'} else {divStyle = ''} ;

                children.push(<td className={divStyle} id={lastItem.toString()} key={lastItem.toString()}>{lastItem}</td>)
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
        /*
            // To form valid date format 
        let myDate =  state.inputYear + '-' + ('0' + (state.inputMonth)).slice(-2) + '-' + ('0' + state.inputDate).slice(-2);
            // Calculate weeks count
        let weeks = curentDate.getTime() - new Date(myDate).getTime();
            // Cound weeks in date
        weeks = ""+((((weeks/1000)/60)/60)/24)/7;
            // Get integer weeks count
        weeks = Number(weeks.substring(0, 4));
        return weeks;
        */ 

        let weeks = (((curentDate.getFullYear() - state.inputYear) * 365) / 7) + (((curentDate.getMonth()+1 - state.inputMonth) * 30 ) / 7) - Math.abs(((curentDate.getDate() - state.inputDate ) / 7 ));

        //if((weeks / 52 / 8) <= 1 )weeks = weeks + 1;
   
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



