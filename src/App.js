import './App.css';
import React, {Suspense, lazy} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Header =lazy(()=>import("./Header"));
const Footer =lazy(()=>import("./Footer"));
const FooterBottom =lazy(()=>import("./FooterBottom"));
const HomePage =lazy(()=>import("./Pages/HomePage"));
const Pricing =lazy(()=>import("./Pages/Pricing"));
const HomeServices =lazy(()=>import("./Pages/Solutions/HomeServices"));
const ProffessionalServices =lazy(()=>import("./Pages/Solutions/ProffessionalServices"));
const Login =lazy(()=>import("./Pages/Login"));

function App() {
  const loading = () => (
    <p className="animated fadeIn pt-3 text-center" >...loading</p>
  );
  return (
    <div className="App">
              <Suspense fallback={loading()}
      >
        <BrowserRouter>
       {window.location.pathname !== '/login'?
  <Header/>
   :''}
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path='/pricing' element={<Pricing/>}></Route>
        <Route path='/home-services' element={<HomeServices/>}></Route>
        <Route path='/professional-services' element={<ProffessionalServices/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
      {window.location.pathname !== '/login'?<>
    <Footer/>
   <FooterBottom/>
   </>:''}
   </BrowserRouter>
   </Suspense>
    </div>
  );
}

export default App;
