import React from "react";

const TableRow = (props) => {
    if(props.weeks){
        let weekNumber = 0;
        let tr = [];
        for(let rows = 0; rows < 91; rows++ ){
            let td = [];
            for(let column = 1;column < 53; column++){
                if(rows>0) weekNumber += 1; else weekNumber = column;
                let listClasses = '';
                if( props.weeksMoods.includes("ID"+weekNumber)){ listClasses += " selected " }
                if( props.weeks>weekNumber) { listClasses += ' active'
             }
                td.push(<td id={"ID"+weekNumber} className={listClasses} onClick={setMood} data-key={weekNumber} key={weekNumber.toString()}>{weekNumber}</td>);
            }
            tr.push(<tr key={rows.toString()}><th className="bg-dark text-white">{rows}</th>{td}<th className="bg-dark text-white">{rows}</th></tr>)
        }
        return tr;
    } else {
        return false;
    }

    function setMood(event){

       if(Number(event.target.getAttribute('data-key')) <= Math.trunc(props.weeks)) props.sentMood(event.target.id);
    }

}

export default TableRow;



