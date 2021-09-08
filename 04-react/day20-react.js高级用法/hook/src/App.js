import React, { useState } from 'react';
import './App.css';

// 自定义 hook
function useCheck() {
    const [num, setRandomText] = useState(Math.random(0, 1));
    // 大于 0.5 时，只返回 num
    if (num > 0.5) {
        return [num];
    }
    function setRandomTextHOC() {
        return setRandomText(Math.random(0, 1));
    }
    return [num, setRandomTextHOC];
}

function App() {
    const [num, setRandomText] = useCheck();

    return (
        <div className="App">
            <h1>{num}</h1>
            <button onClick={setRandomText} disabled={!setRandomText}>
                {setRandomText ? '按钮' : '禁止点击'}
            </button>
        </div>
    );
}

export default App;
