import React, {Component} from 'react';
import { Table,Row, Col } from 'antd';
import 'antd/dist/antd.css';
import {api_host} from "../const";
import Button from "antd/es/button";
import UserUpdateFrom from "./userUpdateFrom";
import UserFrom from "./UserFrom";
class UserList extends Component {
    constructor (props){
        super(props);
        this.state = {
            data:[],
            selectedRowKeys:[]
        }
        this.updateData = this.updateData.bind(this);
        this.onDeleteClick = this.onDeleteClick.bind(this);
    }
    updateData(){
        fetch(`${api_host}/api/user`)
            .then((response)=>  {
                return response.json();
            })
            .then(myJson=> {
                console.log(myJson);
                myJson.map(item => {
                    item['key']=item.id
                });
                this.setState({data: myJson})
            });

    }
    onSelectedRowKeysChange = (selectedRowKeys) => {
        this.setState({ selectedRowKeys });

    }
    componentDidMount() {
        this.updateData()

    }

    onDeleteClick(e){
        console.log(this.state.selectedRowKeys);
        fetch(`${api_host}/api/user/${this.state.selectedRowKeys[0]}`, {
            body: '', // must match 'Content-Type' header
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, same-origin, *omit
            headers: {
                'user-agent': 'Mozilla/4.0 MDN Example',
                'content-type': 'application/json'
            },
            method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, cors, *same-origin
            redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer', // *client, no-referrer
        }).then(()=>{this.updateData()});
    }
    render() {

        const {data}=this.state
        const columns = [
            {
                title: 'id',
                dataIndex: 'id',
                key: 'id',
                render: text => <a>{text}</a>,
            },
            {
                title: 'username',
                dataIndex: 'username',
                key: 'username',
                render: text => <a>{text}</a>,
            },
            {
                title: 'password',
                dataIndex: 'password',
                key: 'password',
                render: text => <a>{text}</a>,
            },
            {
                title: 'name',
                dataIndex: 'name',
                key: 'name',
                render: text => <a>{text}</a>,
            },
            {
                title: 'email',
                dataIndex: 'email',
                key: 'email',
                render: text => <a>{text}</a>,
            },
            {
                title: 'phone',
                dataIndex: 'phone',
                key: 'phone',
                render: text => <a>{text}</a>,
            },
            {
                title: 'role',
                dataIndex: 'role',
                key: 'role',
                render: text => <a>{text}</a>,
            },
        ];
        const rowSelection = {type:'radio',onChange: this.onSelectedRowKeysChange,}
        return (
            <div>
                <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
                <h2>Update/Delete</h2>
                <Row>
                    <Col span={16}><UserUpdateFrom  sId = {this.state.selectedRowKeys} updateList = {this.updateData}/></Col>
                    <Col span={3}><Button type="danger" onClick={this.onDeleteClick}>Delete</Button></Col>
                </Row>
                <h2>create</h2>
                <UserFrom updateList = {this.updateData}/>

            </div>
        );
    }
}

export default UserList;