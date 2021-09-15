import React from 'react';
import './App.css';
import './toutiao.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import { Header } from './components/Header';
import { IndexChannel } from './components/IndexChannel';
import { IndexContent } from './components/IndexContent';
import { RightModule } from './components/RightModule';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <div className="bui-box container">
          <IndexChannel />
          <IndexContent />
          <RightModule />
        </div>
      </div>
    </Provider>
  );
}

export default App;
