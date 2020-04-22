import React, {Component} from 'react';
import {api_host} from '../const';
import {Select,Input,Button,Alert} from 'antd';

import 'antd/dist/antd.css';
const { Option } = Select;

class Massage extends Component {
    constructor (props){
        super(props);
        this.state = {
            myself:{},
            msg:[],
            user: [],
            targetId:{},
            textToSent:'',
            sent:false
        }
        this.onSelectChange = this.onSelectChange.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
        this.onSendClick = this.onSendClick.bind(this);
    }

    componentDidMount() {
        console.log(this.props.getUserBy)
        fetch(`${api_host}/api/user/${this.props.getUserBy}`)
            .then((response)=>  {
                return response.json();
            })
            .then((myJson)=> {
                console.log(myJson);
                this.setState({myself:myJson})
                this.setState({msg:myJson['messages']})
            })
        fetch(`${api_host}/api/user`)
            .then((response)=>  {
                return response.json();
            })
            .then((myJson)=> {
                //console.log(myJson);
                const toRole = this.props.toUser
                let filtedUser = [];
                myJson.map(item=>{
                    if(item.role==toRole){
                        filtedUser.push(item)

                    }
                });
                //console.log(filtedUser);
                this.setState({user:filtedUser})
            });
    }
    onSelectChange(value){
        this.setState({targetId : value})

    }
    onTextChange(e){
        let {value}=e.target
        this.setState({textToSent : value})

    }
    onSendClick(e){
        let from = this.state.myself
        let target = this.state.user[this.state.targetId]
        let data = {};
        let msgbody = `${from.name}@${target.name}: ${this.state.textToSent}`
        if(this.props.toUser == "Salesman"){
            data={text:msgbody,customer:from,salesman:target};
        }else if(this.props.toUser == "Customer"){
            data={text:msgbody,customer:target,salesman:from};
        }
        console.log(data);
        console.log(data);

        fetch(`${api_host}/api/message`, {
            body: JSON.stringify(data), // must match 'Content-Type' header
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
             // parses response to JSON
        this.setState({sent:true})
        setTimeout(()=>{
            this.setState({
                sent:false
            });},2000);

    }

    render() {
        console.log(this.state)
        return (
            <div>
                <h1>Hi {this.state.myself.name} you have message</h1>

                <ul>
                    {this.state.msg.map(msg => <li key={msg.id}>{msg.text}</li>)}

                </ul>
                <Select style={{ width: 120 }} onChange={this.onSelectChange}>
                    {this.state.user.map((user,index) => <Option key={index}>{user.name}</Option>)}
                </Select>
                <Input style={{ width: 520 }} placeholder="massage" onChange={this.onTextChange} />
                <Button type="primary" onClick={this.onSendClick}>Send</Button>
                {(() => {
                    if (this.state.sent) {
                        return <Alert message="Send Plz refresh" type="success" />;
                    } else {
                        return <div />;
                    }
                })()}

            </div>
        );
    }
}

export default Massage;