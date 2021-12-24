import React from 'react';
import request from '../../util/fetch';

class UserInfo extends React.Component {
    componentDidMount() {
        return request('/api/user').then(resp => resp.json()).then(data => {
            console.log(data);
        });
    }

    render() {
        const { user={} } = this.state;

        return (
            <div>用户信息 {user.name || 'loading...'}</div>
        );
    }
}

export default UserInfo;
