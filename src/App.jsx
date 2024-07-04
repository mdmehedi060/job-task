import { Outlet } from 'react-router-dom';
import './App.css';

import Navbar from './Pages/Navbar';
import Banner from './Pages/Banner';
import Patient from './Pages/Patient';
import Solutions from './Pages/Solutions';
import Services from './Pages/Services';
import Testomonials from './Pages/Testomonials';
import FAQ from './Pages/FAQ';
import Footer from './Pages/Footer';
import Appointment from './Pages/Appointment';

function App() {
  return (
    <>
      {/* <Outlet></Outlet> */}
      <Navbar></Navbar>
      <Banner></Banner>
      <Patient></Patient>
      <Solutions></Solutions>
      <Services></Services>
      <Testomonials></Testomonials>
      <FAQ></FAQ>
      <Appointment></Appointment>
      <Footer></Footer>
    </>
  );
}

export default App;
