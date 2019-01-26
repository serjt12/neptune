import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Footer from './components/Footer'
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
