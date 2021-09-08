/**
 * 高阶组件（初体验）
 */
import React from 'react';

class InputComponent extends React.Component {
    render() {
        return (
            <div>
                <input defaultValue={this.props.options.text} />
                <p>{this.props.state.text}</p>
                <button onClick={this.props.renderText}>按钮</button>
            </div>
        );
    }
}

// class AnotherComponent extends React.Component {
//     render() {
//         return (
//             <p>{this.props.options.text}</p>
//         );
//     }
// }

function createForm(options) {
    return function (WrappedComponent) {
        return class extends React.Component {
            state = {text: '初始化'};
            renderText = () => {
                this.setState({text: Math.random(0, 1)});
            }
            render() {
                // 将 props 传递给被包装组件
                return (
                    <WrappedComponent options={options} renderText={this.renderText} state={this.state} />
                );
            }
        }
    }
}

export default createForm({text: 'hello world'})(InputComponent)
// export default createForm({text: 'hello world'})(AnotherComponent);

/**
 * 高阶组件
 * 目的：为每一个传入的组件，都注入相同的 props
 * 这样的话，无论是一个 InputComponent 还是一个 AnotherComponent，都能拿到相同的 props
 * 从而达到【代码复用】的目的👍
 *
 * 批量生成 拥有相同props的组件
 */
