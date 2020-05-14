import React, {useEffect} from 'react';
import {withRouter} from 'react-router-dom'
import {useRoutes} from './routes'
import NavBar from './components/navBar/navBar';
import Footer from './components/footer/footer';
import {connect} from 'react-redux'
import {authSuccess, autoLogin, logout} from './store/actions/authAction'
import './App.css';
import 'materialize-css'

function App(props) {
  const routes = useRoutes(props.isAuthenticated, props.userId);
  useEffect(()=> {

    props.autoLogin()
  }
  )
  return (
    <React.Fragment>
    <NavBar 
      isAuthenticated={props.isAuthenticated}
      userName={props.userName}
      userId={props.userId}
      logout={props.logout}
    />
      <div className="container-fluid">
        {routes}
      </div>
    <Footer />
    </React.Fragment>
  );
}
const mapStateToProps = (state) => {
  return {
    isAuthenticated: !!state.auth.token,
    userName: state.auth.name,
    userId: state.auth.userId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    authSuccess: (token) => dispatch(authSuccess(token)),
    autoLogin: () => dispatch(autoLogin()),
    logout: () => dispatch(logout())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
