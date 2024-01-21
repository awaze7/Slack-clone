import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chat from './components/Chat';

function Home() {
  return <h1>Home Screen</h1>;
}


function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <div className="app_body">
          <Sidebar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/room/:roomId" element={<Chat />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
