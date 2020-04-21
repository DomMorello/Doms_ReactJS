import React from 'react';

function Food({fav}){
  return <h3>I love {fav}</h3>
}

function App() {
  return (
    <div className="App">
      <h1>Hello world!</h1>
      <Food fav="kimchi"/>
      <Food fav="dom"/>
      <Food fav="morello"/>
      <Food fav="wow"/>
    </div>
  );
}

export default App;
