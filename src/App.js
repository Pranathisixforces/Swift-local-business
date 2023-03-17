import './App.css';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FooterBottom from './FooterBottom';
import HomePage from './Pages/HomePage';
import Pricing from './Pages/Pricing';
import HomeServices from './Pages/Solutions/HomeServices';
import ProffessionalServices from './Pages/Solutions/ProffessionalServices';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
  <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path='/pricing' element={<Pricing/>}></Route>
        <Route path='/home-services' element={<HomeServices/>}></Route>
        <Route path='/professional-services' element={<ProffessionalServices/>}></Route>
      </Routes>
  <Footer/>
   <FooterBottom/>
   </BrowserRouter>
    </div>
  );
}

export default App;
