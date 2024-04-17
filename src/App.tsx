import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import Login from './components/Login/Login';
import { useStateValue } from './components/StateProvider.js';

const AppWrapper = styled.div`
  background-color: #f1f2f5;
  .app__body {
    display: flex;
  }
`;

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <AppWrapper>
      {user ? (
        <>
          <Header />
          <div className='app__body'>
            <Sidebar />
            <Feed />
          </div>
        </>
      ) : (
        <Login />
      )}
    </AppWrapper>
  );
}

export default App;
