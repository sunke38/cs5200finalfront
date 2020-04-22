import React, {Component} from 'react';
import Massage from "./Massage";
import {api_host} from "../const";
import SalerCarList from "./SalerCarList";
//'id/19'
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
                <h1>saler</h1>
                <Massage toUser={'Customer'} getUserBy={'profile'}/>
                <SalerCarList forSaler={false}/>
            </div>
        );
    }
}

export default saler;