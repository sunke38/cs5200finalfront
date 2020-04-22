import React, {Component} from 'react';
import Massage from "./Massage";
import {api_host} from "../const";

class saler extends Component {
    constructor (props){
        super(props);
        this.state = {}

    }
    componentDidMount(){

    }
    render() {
        return (
            <div>
                <h1>Page2</h1>
                <Massage toUser={'Salesman'} getUserBy={'id/18'}/>
            </div>
        );
    }
}

export default saler;