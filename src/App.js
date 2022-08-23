import { BrowserRouter as Router } from 'react-router-dom';
import Benefit from './components/Benefits/Benefit';
import Download from './components/Download/Download';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import RegistrationProcess from './components/RegistrationProcess/RegistrationProcess';
import Users from './components/Users/Users';

function App() {
	return (
		<div className="App">

			<Router>
				<Header />
				<Users />
				<RegistrationProcess />
				<Benefit />
				<Download />
				<Footer />
			</Router>
		</div>
	);
}

export default App;