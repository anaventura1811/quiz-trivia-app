import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Quiz from './pages/Quiz';
import Feedback from './pages/Feedback';
import Ranking from './pages/Ranking';
import Settings from './pages/Settings';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={ Login } />
      <Route path="/quiz" component={ Quiz } />
      <Route path="/feedback" component={ Feedback } />
      <Route path="/ranking" component={ Ranking } />
      <Route path="/settings" component={ Settings } />
    </Switch>
  );
}

export default App;
