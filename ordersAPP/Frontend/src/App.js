import './App.css';
import React from 'react';
import{BrowserRouter,Route,Routes}from 'react-router-dom';
import Navbarcomponent from './components/Navbarcomponent';
import Home from './components/Home';
import Footer from './components/footer/Footer';
import HistorialdeOrdenes from './components/HistorialdeOrdenes';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbarcomponent/>
    <Routes>
      
        <Route path='/' element={<Home />}>
          
        </Route>
        <Route path='/historialordenes' element={<HistorialdeOrdenes />}>
        </Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
