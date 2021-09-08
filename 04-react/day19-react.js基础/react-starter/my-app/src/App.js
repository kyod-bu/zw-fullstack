import { Component } from 'react';
import './App.css';

class RenderText extends Component {
    // 可以注释掉 shouldComponentUpdate 试试看效果
    shouldComponentUpdate(next) {
        const prev = this.props;
        console.log(next, prev, next.renderRandomText === prev.renderRandomText);
        // 引用相同
        if (
            next.renderRandomText === prev.renderRandomText
        ) {
            return false;
        }
        return true;
    }

    render() {
        return (
            <div onClick={this.props.renderRandomText}>{this.props.text}</div>
        );
    }
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'hello'
        };
        this.renderRandomText = this.renderRandomText.bind(this);
    }

    clickhandle = (e) => {
        setTimeout(function () {
            console.log('button1 click :::', e.currentTarget.innerText);
        }, 1000);
    }

    clickhandle2 = (e) => {
        console.log('button2 click :::', e.currentTarget.innerText);
    }

    renderRandomText() {
        this.setState({ text: Math.random() });
    }

    render() {
        return (
            <div className="App">
                <button onClick={this.clickhandle}>button1</button>
                <button onClick={this.clickhandle2}>button2</button>
                <button onClick={this.renderRandomText.bind(this)}>button3</button>
                <RenderText
                    // aProps={cloneDeep(obj)}
                    // aProps={immutable.fromJS(obj)}
                    text={this.state.text}
                    renderRandomText={this.renderRandomText}
                />
            </div>
        );
    }
}

export default App;
