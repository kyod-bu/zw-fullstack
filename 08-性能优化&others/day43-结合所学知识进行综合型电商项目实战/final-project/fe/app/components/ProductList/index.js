import React from 'react';
import request from '../../util/fetch';

import List from '../List';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: false
        }
    }

    componentDidMount() {
        this.setState({ loading: true });
        return request('/api/product')
            .then(resp => resp.json())
            .then(data => {
                console.log('====', data);
                this.setState({
                    data: data.rows,
                    loading: false
                });
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
