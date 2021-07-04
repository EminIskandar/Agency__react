import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';  

//css
import './main.css' 

//components
import Header from './components/header'   
import Footer from './components/footer'   
import Error from './pages/error'   

//pages
import Home from './pages/home'
import About from './pages/about'
import Subsidiaries from './pages/subsidiaries'
import Career from './pages/career'
import Finance from './pages/finance'
import Contact from './pages/contact'

function App() {
  return (
    <Router>
      <div className="App">  
        <Header/> 
            <Switch>
              <Route path="/" exact component={Home} />   
              <Route path="/about" component={About} />   
              <Route path="/subsidiaries" component={Subsidiaries} />   
              <Route path="/career" component={Career} />   
              <Route path="/finance"   component={Finance} />   
              <Route path="/contact"   component={Contact} />   
              <Route path="*" component={Error} />   
               
            </Switch> 
        <Footer/>    
      </div>
  </Router>
  );
}
 
export default App;  
