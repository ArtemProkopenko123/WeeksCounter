import React from "react";

class WeeklyMood extends React.Component {


    setMood(props){
        if(props.state.state.weekId){
            let indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB

            let open = indexedDB.open('weeksApp', 1)

            open.onupgradeneeded = function() {
                let db = open.result
                db.createObjectStore('weeksMood', { autoIncrement: false })
            }
        
            open.onsuccess = function() {
                let db = open.result
                let tx = db.transaction('weeksMood', 'readwrite')
                let store = tx.objectStore('weeksMood');

                
                store.add({ firstname: 'John', lastname: 'Doe', age: props.state.state.weekId}, props.state.state.weekId)
        
                tx.oncomplete = function() {
                    db.close()
                }
            }
        }
    }

    getMoods(store){
        store.getAll().onsuccess = function(event) {
            return event.target.result;
        };
    }
    render(){
        return(
            <> 
                {this.setMood(this.props)}
            </>
        );
    }
}

export default WeeklyMood;