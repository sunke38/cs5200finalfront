import React, {Component} from 'react';
import {Row,Button, Col,AutoComplete,Descriptions} from 'antd'
import {api_host} from "../const";
class CarInfomation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            CarModel:[],
            DataSource:[],
            SelectedItem:{}
        }
        this.ItemSelected=this.ItemSelected.bind(this)
    }
    componentDidMount() {
        let ds =[]
        fetch(`${api_host}/api/carmodel`)
            .then((response)=>  {
                return response.json();
            })
            .then(myJson=> {
                this.setState({CarModel:myJson})

                console.log(myJson);
                myJson.map(item => {
                    ds.push(item['name'])
                })

            }).then(()=>this.setState({DataSource:ds}));;


    }
    ItemSelected(value, option){

        this.state.CarModel.map(item=>{
            if(item['name']===value){
                console.log(item);
                this.setState({SelectedItem:item})
            }
        })

    }
    render() {
        const {SelectedItem}=this.state
        return (
            <div>
                <Row>
                    <Col>
                        <AutoComplete dataSource={this.state.DataSource} onSelect={this.ItemSelected}/>
                    </Col>
                    <Col>
                        <Descriptions>
                            <Descriptions.Item label="Name">{SelectedItem.name}</Descriptions.Item>
                            <Descriptions.Item label="Color">{SelectedItem.color}</Descriptions.Item>
                            <Descriptions.Item label="VIN">{SelectedItem.vin}</Descriptions.Item>
                            <Descriptions.Item label="Type">{SelectedItem.type}</Descriptions.Item>
                        </Descriptions>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default CarInfomation;