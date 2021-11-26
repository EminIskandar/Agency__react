import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';   

//css
import './main.css'

//components 
import { Header, Footer }from 'components'      

//pages
import { About, Career, Finance, Contact, Error, Subsidiaries, Home } from 'page' 

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
