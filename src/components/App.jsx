import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import AboutUs from './AboutUs';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Contact from './contactUs';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <AboutUs />
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
      
      <Footer />
      </Switch>

      </div>
    </div>

    </Router>
  );
}

export default App;


