import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from './components/NavBar';
import About from './pages/About/About';
import Contact from './pages/Contact/contact';
import Project from './pages/Project/project';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
    <div className="App">
    <Navbar />
      <h2>Hei</h2>
      <Route exact path="/" component={About} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/project" component={Project} />

      <Footer />
    </div>
    </Router>
  );
}

export default App;
