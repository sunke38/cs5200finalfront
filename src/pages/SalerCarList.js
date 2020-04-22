import React, {Component} from 'react';
import {api_host} from "../const";
import {Col, Row, Table} from "antd";
import UserUpdateFrom from "./userUpdateFrom";
import Button from "antd/es/button";

class SalerCarList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            saler:{},
            modellist:[],
            selectIdx:0,
        }
        this.loadself=this.loadself.bind(this)
    }
    componentDidMount() {
        const api_self= '/api/user/profile'
        const fake_self='/api/salesman/id/19'
        fetch(`${api_host}${api_self}`)
            .then((response)=>  {
                return response.json();
            })
            .then(myJson=> {
                console.log('myJson',myJson['carModels']);

                this.setState({saler:myJson})
                this.setState({modellist:myJson['carModels']})
            });
    }


    loadself(){

    }

    render() {
        const {saler,modellist}=this.state
        console.log('saler',saler)
        return (
            <div>
                <div>
                    <h1>{saler.name}</h1>{modellist.map(md=><Row><Col span={2}>{md.name}</Col><Col span={2}>{md.type}</Col><Col span={2}>{md.color}</Col></Row>)}

                </div>
            </div>
        );
    }
}

export default SalerCarList;