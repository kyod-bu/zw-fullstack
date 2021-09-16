const React = window.React;
const ReactDOM = window.ReactDOM;

// 构造一个列表
// const list = (new Array(50000)).fill(1).map((num, index) => index);
const list = (new Array(5)).fill(1).map((num, index) => 'prefix-' + index);

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
        setTimeout(()=> {
            console.log('构造的数据列表 list:::', list);
            this.setState({ list });
        }, 3000);
    }

    render() {
        return React.createElement('div', {
            className: 'appContainer'
        }, [
            React.createElement('div', {}, '这事上面的 div'),
            this.state.list.map(item => {
                return React.createElement('span', {
                    key: item
                }, '这是 span');
            })
        ]);
    }
}

ReactDOM.render(
    React.createElement(App),
    document.getElementById('app')
);
