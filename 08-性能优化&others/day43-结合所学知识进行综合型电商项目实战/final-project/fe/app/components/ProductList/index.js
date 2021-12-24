import React from 'react';
import request from '../../util/fetch';

import List from '../List';

export class extends React.Component {
    constructor() {
        this.state = {
            data: [],
            loading: false
        }
    }

    componentDidMount() {
        this.setState({ loading: true });
        return request('/api/list')
            .then(resp => resp.json())
            .then(data => {
                this.setState({ data, loading: false });
            });
    }

    render() {
        if (this.state.loading) {
            return <div>loading...</div>;
        }
        return (
            <List data={this.state.data} />
        );
    }
}
