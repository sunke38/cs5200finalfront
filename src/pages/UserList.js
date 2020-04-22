import React, {Component} from 'react';
import { Table } from 'antd';
import 'antd/dist/antd.css';
class UserList extends Component {
    render() {
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
        return (
            <div>
                <Table columns={columns} dataSource={data} />
            </div>
        );
    }
}

export default UserList;