import React from 'react';
import './App.css';
import Header from './components/header/header.component.jsx';
import Footer from './components/footer/footer.component.jsx';
import {Route, Switch} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component.jsx';
import Features from './pages/features/features.component.jsx';
import Services  from './pages/services-page/services-page.component.jsx'
import TopAd from './components/top-ad/top-ad.component';

function App() {
  return (
    
    <div className="page-container">
      <div className='content-wrap'>
      <TopAd/>
      <Header />
        <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/features' component={Features}/>
        <Route path='/services' component={Services}/>
        
        </Switch>
      
        
        
      </div>
      <Footer />
    </div>
  );
}

export default App;
