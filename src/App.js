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
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Howitworks from './components/Howitworks';
import Home from './components/Home';
import BookingForm from './components/product/BookingForm';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path='/booking-form' element={<BookingForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
