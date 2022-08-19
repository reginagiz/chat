import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Dialogs from './components/dialogs/Dialogs';





function App() {
  return (
    <div className="app-wrapper">
     
      <Header/>
      <Navbar/>
      <Dialogs/>
      
    </div>
  );
}

export default App;
