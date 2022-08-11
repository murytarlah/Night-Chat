import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">

      <Router>
        <Header />
      </Router>
    </div>
  );
}

export default App;
