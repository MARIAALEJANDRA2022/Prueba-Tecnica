import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Registro from './components/Register';
import Leads from './components/Leads'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/registro" element={<Registro />} />
              <Route path="/leads" element={<Leads />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
