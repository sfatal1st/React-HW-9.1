import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './components/HomePage';
import DriftPage from './components/DriftPage';
import TimeAttackPage from './components/TimeAttackPage';
import ForzaPage from './components/ForzaPage';
import Menu from './components/Menu';
import './App.css';

export default function App() {
  return (
    <Router>
      <div>
        <Menu />
        <div className="page">
          <Routes>
            <Route path="/" exact Component={HomePage} />
            <Route path="/drift" Component={DriftPage} />
            <Route path="/timeattack" Component={TimeAttackPage} />
            <Route path="/forza" Component={ForzaPage} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}