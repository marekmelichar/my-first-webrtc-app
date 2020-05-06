import React from 'react';
import './App.css';

import Header from '../Header/Header';
import Body from '../Body/Body';

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      {/* <div style={{
        background: "red",
        gridColumnStart: 2,
        gridColumnEnd: 3,
        gridRowStart: 3,
        gridRowEnd: 4
      }}>FOOTER</div> */}
    </div>
  );
}

export default App;
