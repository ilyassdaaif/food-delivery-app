import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
// Import other components

function App() {
  return (
    <Router>
      <div className="App">
	<Switch>
	  <Route path="/" exact component={Home} />
	  <Route path="/about" component={About} />
	  {/* Define other routes */}
	</Switch>
      </div>
    </Router>
  );
}

export default App;
