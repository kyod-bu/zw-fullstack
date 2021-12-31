import React from 'react';
import request from '../../util/fetch';

import List from '../List';
import LoadMore from '../LoadMore';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            perPage: 5,
            pn: 1,
            data: [],
            loading: false
        };
        this.loadMoreFn = this.loadMoreFn.bind(this);
    }

    componentDidMount() {
        this.setState({ loading: true });
        const { perPage, pn } = this.state;
        return request(`/api/product?perPage=${perPage}&pn=${pn}`)
            .then(resp => resp.json())
            .then(data => {
                // console.log('====', data);
                this.setState({
                    data: data.rows,
                    loading: false
                });
            });
    }

    loadMoreFn() {
        const { perPage, pn } = this.state;
        this.setState({ loading: true });
        const newPn = pn + 1;
        return request(`/api/product?perPage=${perPage}&pn=${newPn}`)
            .then(resp => resp.json())
            .then(data => {
                this.setState({
                    pn: newPn,
                    // data: [...this.state.data, ...data.rows],
                    data: this.state.data.concat(data.rows),
                    loading: false
                });
            });
    }

    render() {
        if (this.state.loading) {
            return <div>loading...</div>;
        }
        return (
            <div>
                <List data={this.state.data} />
                <LoadMore loadMoreFn={this.loadMoreFn} />
            </div>
        );
    }
}
