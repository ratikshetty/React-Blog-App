import React from 'react';
import './App.css';
import Article from './comp/article'

function App() {
  return (
    <div className="">
      <header className="">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Blog React Application is under maintainance!!!
          <h1>COMING SOON!!!!!!!</h1>
          
        </p> */}
      
       
      </header>
      <div style={{padding:50+'px', }}>
        <div className="container-fluid">
        <Article/>
        </div>
      
      </div>
    </div>
  );
}

export default App;
