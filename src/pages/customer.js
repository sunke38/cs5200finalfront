import React, {Component} from 'react';
import Massage from "./Massage";
import CarInfomation from "./CarInfomation";
import Modalbysaler from './modalbysaler'
//'id/18'
class Customer extends Component {
    componentDidMount() {

    }


    render() {
        return (
            <div>
                <h1>Customer</h1>
                <Massage toUser={'Salesman'} getUserBy={'profile'}/>
                <h1>Search car</h1>
                <CarInfomation/>
                <h1>Saler list</h1>
                <Modalbysaler/>
            </div>
        );
    }
}

export default Customer;