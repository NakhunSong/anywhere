import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { MainPage, EditPage } from '../pages';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/edit" component={EditPage} />
    </Switch>
  );
};

export default App;