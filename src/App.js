import React from 'react';
import './App.css';
import Navigation from './components/navbar/navbar.component.jsx';
import Banner from './components/banner-top/banner-top.component.jsx';
import Footer from './components/footer/footer.component.jsx';


function App() {
  return (
    
    <div className="page-container">
      <div className='content-wrap'>
        <Navigation/>
        <Banner/>
        
      </div>
      <Footer />
    </div>
  );
}

export default App;
