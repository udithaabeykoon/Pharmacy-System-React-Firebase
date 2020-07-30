import React, { Component } from "react";
import { NavLink, Route, Switch, Redirect } from "react-router-dom";
import Store from "./Store/Store";
import Orders from "./Orders/Orders";
import './Home.css';

class Home extends Component {


    render() {
        console.log(this.props.match.url + "/store");
        return (
            <div>
                <div>
                    <ul>
                        <li><NavLink to={this.props.match.url + "/store"} >Store</NavLink></li>
                        <li><NavLink to={this.props.match.url + "/orders"}>Orders</NavLink></li>
                    </ul>
                </div>
                <div>
                    <Switch>
                        <Route path={this.props.match.url + "/store"} component={Store} />
                        <Route path={this.props.match.url + "/orders"} component={Orders} />
                    </Switch>

                </div>
            </div>

        );
    }
}

export default Home;