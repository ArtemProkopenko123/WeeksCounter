import React from "react";

const TableHeader = (props) => {

    if(props.weeks){
        let thead = [];
        let num;
            // Outer loop to create parent
        for (let i = 0; i < 1; i++) {
        let children = []
            //Inner loop to create children
        for (let j = 0; j < 53; j++) {
            if(j<=9) {
                 num = '0' + j;
            } else num = j
            children.push(<th key={j}>{num}</th>)
        }
        let math = Math.random();
            //Create the parent and add the children
        thead.push(<tr key={math} className="thead-dark">{children}<th>00</th></tr>)
        }
        return thead
    } else {
        return null;
    }
}
export default TableHeader;
