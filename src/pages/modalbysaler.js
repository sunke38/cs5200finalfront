import React, {Component} from 'react';
import {api_host} from "../const";
import {Row,Col}from 'antd'
class Modalbysaler extends Component {
    constructor (props){
        super(props);
        this.state = {
            saler:[]
        }

    }
    componentDidMount() {
        let ret =[]
        fetch(`${api_host}/api/salesman`)
            .then((response)=>  {
                return response.json();
            })
            .then(myJson=> {
                console.log('myJson',myJson);
                this.setState({saler:myJson})
                /*
                myJson['carModels'].map(item => {
                    //console.log(item);
                });*/
                //this.setState({modellist: myJson['carModels']})
            });
    }

    render() {
        const {saler}=this.state
        return (
            <div>
                {saler.map(saler=><div key={saler.id}><h1>{saler.name}</h1>{saler.carModels.map(md=><Row><Col span={2}>{md.name}</Col><Col span={2}>{md.type}</Col><Col span={2}>{md.color}</Col></Row>)}</div>)}
            </div>
        );
    }
}

export default Modalbysaler;