import React from 'react';
import ReactMarkdown from 'react-markdown';
import './index.css';

const { ipcRenderer } = window.require('electron');

class EditArea extends React.Component {
    state = {
        text: ''
    }

    componentDidMount() {
        // 监听 file-content
        ipcRenderer.on('file-content', (event, arg) => {
            this.setState({
                text: arg
            });
        });
    }

    onChange = e => {
        const value = e.target.innerText;
        this.setState({
            text: value
        })

    }

    render() {
        return (
            <div className="edit-area">
                <h1>EditArea Page</h1>
                {/* <ReactMarkdown children={this.state.text} /> */}
                <div contentEditable onInput={this.onChange}></div>
                <ReactMarkdown>
                    {this.state.text}
                </ReactMarkdown>
            </div>
        );
    }
}

export default EditArea;
