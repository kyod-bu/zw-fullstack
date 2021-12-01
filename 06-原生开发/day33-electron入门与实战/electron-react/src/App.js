import SideBar from './components/SideBar';
import EditArea from './components/EditArea';
import './App.css';

function App() {
  return (
    <div className="app">
      {/* <h1>hello world</h1> */}
      <SideBar />
      <EditArea />
      {/* <canvas id='canvas' width="500" height="500"></canvas> */}
    </div>
  );
}

export default App;
