import React from "react";
import {BrowserRouter as Router, Route,Link} from "react-router-dom";
import AppWrap from "./app/AppWrap";



const AppRouter=()=>{
    return (
        <Router>
            
            <div className="container">
                <nav>
                    <ul className="nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/app1/">App 1</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/app2/">App 2</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/test/">App 3</Link>
                        </li>
                    </ul>
                </nav>
            </div>
                <Route path="" exact component={AppWrap} />
        </Router>
    );
}


export default AppRouter;