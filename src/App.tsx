import React from 'react';
import './App.css';
import Gallery from './components/gallery';
import Header from './components/header';

function App() {
  const [dark, setDark] = React.useState(false);
  return (
    <div className="" data-theme={dark? "black" : "light"} >
      {/* <Header setDark={setDark} dark={dark}/> */}
        <Gallery setDark={setDark} dark={dark} />
      
    </div>
  );
}

export default App;
