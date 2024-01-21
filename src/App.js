import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chat from './components/Chat';
import Login from './components/Login';

function Home() {
  return <h1>Home Screen</h1>;
}


function App() {
  const [user, setUser] = useState(null);
  // const [user, setUser] = useState("SONNY");


  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
              <div className="app_body">
                <Sidebar />

                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/room/:roomId" element={<Chat />} />
                </Routes>
              </div>
          </>
        )}
        
        
      </Router>
    </div>
  );
}

export default App;
