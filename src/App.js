import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Welcomeservices from './components/Welcomeservices';
import Chooseus from './components/Chooseus';
import Comparesection from './components/Comparesection';
import Ourteam from './components/Ourteam';
import Testimonialas from './components/Testimonialas';
import Footer from './components/Footer';
import Howitworks from './components/Howitworks';

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Welcomeservices/>
    <Chooseus/>
    <Howitworks/>
    <Comparesection/>
    <Ourteam/>
    <Testimonialas/>
    <Footer/>
    </>
  );
}

export default App;
