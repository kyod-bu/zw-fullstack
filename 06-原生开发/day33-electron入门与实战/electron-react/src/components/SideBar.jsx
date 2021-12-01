import React from 'react';
import './index.css';

const { ipcRenderer } = window.require('electron');

class SideBar extends React.Component {

    open = () => {
        ipcRenderer.send('open-folder');
    }

    render() {
        return (
            <div className="side-bar">
                <button onClick={this.open}>打开</button>
            </div>
        );
    }
}

export default SideBar;
