/**
 * 获取数据的一个 Component
 */
const React = require('react');

module.exports = class FetchDataComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data || (window.__init__ && window.__init__.data)
        }
    }

    componentDidMount() {
        if (window.__init__ && window.__init__.data) {
            return null;
        }
        fetch('http://localhost:8080/api/data')
            .then(response => response.json())
            .then(result => {
                this.setState({data: result.data});
            })
    }

    render() {
        const data = this.state.data;

        if (!data) {
            return 'loading...';
        }
        return React.createElement('div', null, data);
    }
}
