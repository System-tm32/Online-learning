import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import {useRoutes} from './routes'
import NavBar from './components/navBar/navBar';
import Footer from './components/footer/footer';
import './App.css';
import 'materialize-css'

function App() {
  const routes = useRoutes(false)
  return (
    <BrowserRouter>
    <NavBar />
      <div className="container-fluid">
        {routes}
      </div>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
