import React, {Component} from 'react';
import {Input, Row, Col, Divider, Button, Table} from 'antd';
import 'antd/dist/antd.css';
import md5 from 'js-md5';
import {api_host} from "../const";
class CreateMakerLodeModel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showTable:false,
            maker:'',
            Country:'',
            CarModelList:[]
        }
        this.onFatchClicked=this.onFatchClicked.bind(this)
        this.onCloseClicked=this.onCloseClicked.bind(this)
        this.onMakerchenged=this.onMakerchenged.bind(this)
        this.onContrychenged=this.onContrychenged.bind(this)
        this.LodeModel=this.LodeModel.bind(this)
        this.PostMakeModel=this.PostMakeModel.bind(this)
    }
    componentDidMount() {

    }

    PostMakeModel(list){
        fetch(`${api_host}/api/maker/${this.state.maker}/${this.state.Country}/importall`, {
            body: JSON.stringify(list), // must match 'Content-Type' header
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, same-origin, *omit
            headers: {
                'user-agent': 'Mozilla/4.0 MDN Example',
                'content-type': 'application/json'
            },
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, cors, *same-origin
            redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer', // *client, no-referrer
        }).then(response => console.log(response.json()))
    }

    LodeModel(maker){
        console.log(maker)
        fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/${maker}?format=json`)
            .then((response)=>  {
                console.log(response)
                return response.json();
            }).then((myJson)=> {
                let cml = []

                let ret =myJson['Results']
                console.log(ret);
                ret.map(item=>{
                    cml.push({name:item['Model_Name'],year:2020,color:'white',VIN:md5(item['Model_Name']),type:'Sadam'})
                });
                this.setState({CarModelList:cml})
                 //console.log(this.state)
                //console.log(filtedUser);

            }).then(()=>{
                console.log(this.state.Country)
                //let mker = {name:this.state.maker,country:this.state.Country,carModels:}
                //console.log(mker)
                this.PostMakeModel(this.state.CarModelList);
            })

    }
    onFatchClicked(){


        this.LodeModel(this.state.maker)


    }
    onCloseClicked(){

        this.setState({showTable:false})
    }
    onMakerchenged(e){
        let {value}=e.target
        this.setState({maker:value})
    }
    onContrychenged(e){
        let {value}=e.target
        this.setState({Country:value})

    }
    render() {
        const columns = [
            {
                title: 'name',
                dataIndex: 'name',
                key: 'name',
                render: text => <a>{text}</a>,
            },
            {
                title: 'year',
                dataIndex: 'year',
                key: 'year',
                render: text => <a>{text}</a>,
            },
            {
                title: 'color',
                dataIndex: 'color',
                key: 'color',
                render: text => <a>{text}</a>,
            },
            {
                title: 'VIN',
                dataIndex: 'VIN',
                key: 'VIN',
                render: text => <a>{text}</a>,
            },
            {
                title: 'type',
                dataIndex: 'type',
                key: 'type',
                render: text => <a>{text}</a>,
            },
        ]
        return (
            <div>
                <Divider type="vertical" />
                <Row>
                    <h1>Create Maker and Load Model</h1>
                </Row>
                <Row>
                    <Col span={1}>
                        <h3> Maker:</h3>
                    </Col>
                    <Col span={2}>
                        <Input placeholder="maker name" onChange={this.onMakerchenged}/>
                    </Col>
                    <Col span={1}>
                        <h3> Country:</h3>
                    </Col>
                    <Col span={2}>
                        <Input placeholder="Country" onChange={this.onContrychenged}/>
                    </Col>

                    <Col span={1}>
                        <Button type="primary" onClick={this.onFatchClicked}>fetch</Button>
                    </Col>
                    <Col span={this.state.showTable?2:0}>
                        <Button type="danger" onClick={this.onCloseClicked}>close table</Button>
                    </Col>



                </Row>
            <Row>
                <Col span={this.state.showTable?24:0}>
                    <Table columns={columns} dataSource={this.state.CarModelList}/>
                </Col>
            </Row>
            </div>
        );
    }
}

export default CreateMakerLodeModel;