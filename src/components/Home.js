import React from 'react';
import '../styles/Home.css';


function Home() {
  return (
    <div className="home">
      <div className="welcome-container">
        <img
          src="https://a.slack-edge.com/6c404/marketing/img/homepage/bold-existing-users/waving-hand.gif"
          alt="Waving Hand"
          className="waving-hand"
        />
        <h1>Welcome back</h1>
      </div>
    </div>
  );
}

export default Home;
