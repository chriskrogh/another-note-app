import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import UserContextProvider from './context/user/provider';
import ThemeContextProvider from './context/theme/provider';
import Auth from './pages/Auth';
import Main from './pages/Main';

function App() {
  return (
    <UserContextProvider>
      <ThemeContextProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/auth" component={Auth} />
            <Route exact path="/" component={Main} />
          </Switch>
        </BrowserRouter>
      </ThemeContextProvider>
    </UserContextProvider>
  );
}

export default App;
