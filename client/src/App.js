import React from "react";
import Home from './componentes/index'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import './app.css'
import Chat from './componentes/Chat/Chat'

function App() {
  return (  
    <Router>

    <Route path="/" exact component={Home} />

    <Route path="/chat" component={Chat} />

  </Router>
  );
}
export default App;
