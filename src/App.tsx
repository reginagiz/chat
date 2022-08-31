import React, { useState } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Dialogs from './components/dialogs/Dialogs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DialogsItem from './components/dialogs_item/DialogsItem';
import Footer from './components/footer/Footer'
import AuthForm from './components/auth_form/AuthForm'
import { UserInfo } from './context';


function App() {
  const [isAuth, setIsAuth] = useState(false)
  const Authorization = () => {
    isAuth ? setIsAuth(false) : setIsAuth(true);
  };
  const [userDetails, setUserDetails] = useState({})

  return (
    <div className="App">
      <UserInfo.Provider value={{ setUserDetails, userDetails }}>
        {!isAuth ? (
          <AuthForm Authorization={Authorization} />
        ) : (
          <div className="app-wrapper">
            <Router>
              <Header />
              <Navbar />
              <Routes>
                <Route path="/" element={<Dialogs />} />
                <Route path="/dialog-item/:id" element={<DialogsItem />} />
              </Routes>
              <Footer Authorization={Authorization} />
            </Router>
          </div>
        )
        }
      </UserInfo.Provider>
    </div>
  );
}

export default App;
