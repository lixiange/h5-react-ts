import React from 'react';

import Home from './page/home'
import Login from './page/login'
import { AppWrapper, AppRoute } from '@/Components/BasePage'

import './App.css';

function App() {
  return (
    <AppWrapper>
      <AppRoute path={'/home'} tabRoute>
        <Home />
      </AppRoute>
      <AppRoute path={'/login'} tabRoute>
        <Login />
      </AppRoute>
    </AppWrapper>

  );
}

export default App;
