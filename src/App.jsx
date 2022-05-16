import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import ShoppingList from './views/ShoppingList';
import React from 'react';

export default function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/">
          <ShoppingList />
        </Route>
      </Switch>
    </>
  );
}
