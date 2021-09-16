import * as React from 'react';
import * as ReactDOM from 'react-dom';

// 构造一个列表
const list = (new Array(50000)).fill(1).map((num, index) => index);

class Item extends React.Component {
    render() {
        return (
            <div>
                <h1>这是一{this.props.item}</h1>
                <span>x</span>
            </div>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            containerClass: 'appContainer'
        };
        setTimeout(()=> {
            console.log('开始重新渲染啦===构造的数据列表 list:::', list);
            this.setState({ list });
        }, 3000);
    }

    changeClass() {
        this.setState({
            containerClass: 'appContainerAfr'
        });
    }

    render() {
        return (
            <div
                className={this.state.containerClass}
                onClick={this.changeClass.bind(this)}
            >
                一起聊一聊 react {this.state.containerClass}
                { this.state.list.map(item => {
                    return <Item key={item} item={item} />
                }) }
            </div>
        );
    }
}

ReactDOM.createRoot(
    document.getElementById('app')
)
    .render(<App />);
