import React, {useEffect} from 'react';
import {withRouter} from 'react-router-dom'
import {useRoutes} from './routes'
import NavBar from './components/navBar/navBar';
import Footer from './components/footer/footer';
import {connect} from 'react-redux'
import {authSuccess} from './store/actions/authAction'
import './App.css';
import 'materialize-css'

function App(props) {
    useEffect(() => {
      props.authSuccess();
    });
    console.log(props.isAuthenticated)
  const routes = useRoutes(true)
  return (
    <React.Fragment>
    <NavBar />
      <div className="container-fluid">
        {routes}
      </div>
    <Footer />
    </React.Fragment>
  );
}
const mapStateToProps = (state) => {
  return {
    isAuthenticated: !!state.auth.token
  }
}

const mapDispatchToProps = dispatch => {
  return {
    authSuccess: (token) => dispatch(authSuccess(token))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
