import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chat from './components/Chat';
import Login from './components/Login';
import { useStateValue } from './components/StateProvider';
import Home from './components/Home';


function App() {
  const [{user}] = useStateValue();

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
