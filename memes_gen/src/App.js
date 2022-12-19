import './App.css';
import Header from './Components/Header';
import Meme from './Components/Meme';
import React from 'react';

function App() {
  const result = React.useState();
  console.log(result);
  return (
    <div className="App">
    {/* <h1>memes Generator! </h1> */}
    <Header />
    <Meme />
    </div>
    
  );
}

export default App;
