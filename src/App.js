import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <h1>Slack Clone!</h1>

      <Header />

      <div className="app_body">
        {/* Sidebar */}
        <Sidebar />
        {/* React-Router -> Chat Screen */}
      </div>
      
    </div>
  );
}

export default App;
