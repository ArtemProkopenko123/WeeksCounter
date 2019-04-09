import React from "react";
import {BrowserRouter as Router, Route,Link} from "react-router-dom";
import Info from "./info";
import ProdFilterTable from "./app1/prodFilterTable";
import AppWrap from "./denisApp2/AppWrap";
import TestAppWrap from "./app3/appWrap";



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
                            <Link className="nav-link" to="/weather">Weather</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/denis/">Denis</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/test/">Test</Link>
                        </li>
                    </ul>
                </nav>
            </div>
                <Route path="/" exact component={ProdFilterTable} />
                <Route path="/weather/" exact component={Info} />
                <Route path="/denis/" exact component={AppWrap} />
                <Route path="/test/" exact component={TestAppWrap} />
        </Router>
    );
}


export default AppRouter;