import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Quiz from './pages/Quiz';
import Feedback from './pages/Feedback';
import Ranking from './pages/Ranking';
import Settings from './pages/Settings';
import { TimerContextProvider } from './context/TimerContext';

function App() {
  return (
    <TimerContextProvider>
      <Switch>
        <Route path="/" exact component={ Login } />
        <Route path="/quiz" component={ Quiz } />
        <Route path="/feedback" component={ Feedback } />
        <Route path="/ranking" component={ Ranking } />
        <Route path="/settings" component={ Settings } />
      </Switch>
    </TimerContextProvider>
  );
}

export default App;
