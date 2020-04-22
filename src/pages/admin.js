import React, {Component} from 'react';
import UserList from "./UserList";
import UserFrom from "./UserFrom";
import CreateMakerLodeModel from "./CreateMakerLodeModel";
class Admin extends Component {
    render() {
        return (
            <div>
                <h1>admin</h1>
                <UserList/>
                <CreateMakerLodeModel/>
            </div>
        );
    }
}

export default Admin;