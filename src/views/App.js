import { React } from 'react';
import { Switch, Route } from 'react-router';
import { Game } from './Game/Game';
import { Score } from './Score/Score';
import { Start } from './Start/Start';

export const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Start} />
      <Route path="/game" component={Game} />
      <Route path="/score" component={Score} />
    </Switch>
  );
};
