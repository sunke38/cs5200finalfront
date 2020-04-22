import React, {Component} from 'react';
import { Form, Icon, Input, Button,Select } from 'antd';
import {api_host} from "../const";
import 'antd/dist/antd.css';
const { Option } = Select;
function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}
class From extends Component {
    componentDidMount() {
        // To disable submit button at the beginning.
        this.props.form.validateFields();
    }
    postData(data){
        fetch(`${api_host}/api/user`, {
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
        }).then(()=>this.props.updateList())
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.postData(values);
            }
        });
    };

    render() {
        const {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = this.props.form;

        // Only show error after a field is touched.
        const usernameError = isFieldTouched('username') && getFieldError('username');
        const passwordError = isFieldTouched('password') && getFieldError('password');
        const emailError = isFieldTouched('email') && getFieldError('email');
        const phoneError = isFieldTouched('phone') && getFieldError('phone');
        const nameError = isFieldTouched('name') && getFieldError('name');
        return (
            <Form layout="inline" onSubmit={this.handleSubmit}>
                <Form.Item >
                    {getFieldDecorator('role', {
                        rules: [{required: true, message: 'Please select role!'}],initialValue : 'Salesman',
                    })(
                        <Select style={{ width: 120 }} >
                            <Option value="Salesman">Salesman</Option>
                            <Option value="Customer">Customer</Option>
                        </Select>,
                    )}
                </Form.Item>
                <Form.Item validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
                    {getFieldDecorator('username', {
                        rules: [{required: true, message: 'Please input your username!'}],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                            placeholder="Username"
                        />,
                    )}
                </Form.Item>
                <Form.Item validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
                    {getFieldDecorator('password', {
                        rules: [{required: true, message: 'Please input your Password!'}],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                            type="password"
                            placeholder="Password"
                        />,
                    )}
                </Form.Item>
                <Form.Item validateStatus={emailError ? 'error' : ''} help={emailError || ''}>
                    {getFieldDecorator('email', {
                        rules: [{required: true, message: 'Please input your email!'}],
                    })(
                        <Input
                            placeholder="email"
                        />,
                    )}
                </Form.Item>
                <Form.Item validateStatus={phoneError ? 'error' : ''} help={phoneError || ''}>
                    {getFieldDecorator('phone', {
                        rules: [{required: true, message: 'Please input your phone!'}],
                    })(
                        <Input
                            placeholder="phone"
                        />,
                    )}
                </Form.Item>
                <Form.Item validateStatus={nameError ? 'error' : ''} help={nameError || ''}>
                    {getFieldDecorator('name', {
                        rules: [{required: true, message: 'Please input your name!'}],
                    })(
                        <Input
                            placeholder="name"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
                        Create
                    </Button>
                </Form.Item>
            </Form>
        )
    }
}
const userFrom = Form.create({ name: 'horizontal_login' })(From);
export default userFrom;