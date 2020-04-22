
import React, { Component } from 'react'
import { Route, Switch, withRouter, BrowserRouter } from 'react-router-dom'
import App from "./App";
import Customer from './pages/customer'
import saler from './pages/saler'
import Admin from "./pages/admin";
class Router extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={withRouter(App)} />
                    <Route exact path="/customer" component={withRouter(Customer)} />
                    <Route exact path="/saler" component={withRouter(saler)} />
                    <Route exact path="/admin" component={withRouter(Admin)} />
                </Switch>
            </BrowserRouter>
        )
    }
}
export default Router