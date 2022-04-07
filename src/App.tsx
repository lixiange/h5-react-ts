import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import { AppWrapper, AppRoute } from '@/Components/BasePage'
import Home from './page/home'
import Login from './page/login'

import './App.css';

function App() {
  return (
    <AppWrapper>
      <AppRoute path={'/home'} tabRoute>
        <Home />
      </AppRoute>
      <AppRoute path={'/login'}>
        <Login />
      </AppRoute>
    </AppWrapper>

  );
}

export default App;
