import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import './App.css';


class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>buyCar</h1>
                <h2>Select your role</h2>
                <h3>if you didn't login it will jump to login after your choice then back this page</h3>
                <ul role="nav">
                    <li><a href="/customer">customer</a></li>
                    <li><a href="/saler">salerman</a></li>
                    <li><a href="/admin">admin</a></li>
                </ul>
                <h2><a href="/logout">logout</a></h2>
                <h2>Or create new account</h2>
            </div>
        );
    }
}

export default App;
