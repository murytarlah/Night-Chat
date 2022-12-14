import { BrowserRouter as Router } from 'react-router-dom';
import About from './components/about/about';
import Benefit from './components/Benefits/Benefit';
import Download from './components/Download/Download';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MajorFeature from './components/MajorFeature/MajorFeature';
import Onboarding from './components/onboarding/Onboarding';
import RegistrationProcess from './components/RegistrationProcess/RegistrationProcess';
import Testimonial from './components/Testimonials/Testimonial';
import Users from './components/Users/Users';

function App() {
	return (
		<div className="App">

			<Router>
				<Header />
				<Users />
				<RegistrationProcess />
				<Benefit />
				<Onboarding />
				<MajorFeature />
				<About/>
				<Testimonial />
				<Download />
				<Footer />
			</Router>
		</div>
	);
}

export default App;