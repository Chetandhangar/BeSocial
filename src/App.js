import React,{Component}from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';
import {MuiThemeProvider}from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import themePage from './util/theme';
import jwtDecode from 'jwt-decode';
import axios from 'axios';

//redux
import { Provider } from 'react-redux';
import store from './redux/stores';

import {logoutUser, getUserData} from './redux/actions/userActions';
import { SET_AUTHENTICATED} from './redux/types';

import Header from './components/Header';
//pages
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
//util 
import AuthRoute from './util/AuthRoute';

const theme = createMuiTheme(themePage);


const token = localStorage.FBIdToken;
if(token){
  const decodedToken = jwtDecode(token);
  if(decodedToken.exp * 1001 < Date.now()){
    store.dispatch(logoutUser());
    window.location.href = '/login'
   
  }else{
    store.dispatch({type: SET_AUTHENTICATED});
    axios.defaults.headers.common['Authorization']=token;
    store.dispatch(getUserData());
  }
}

class App extends Component {
  render(){
    return (
       <MuiThemeProvider theme={theme}>
         <Provider store={store}>
         <Router>
         <Header/>
           <div className="container">
           <Switch>
             <Route exact path='/' component={Home}></Route>
             <AuthRoute path='/login' component={Login} ></AuthRoute>
             <AuthRoute path='/signup' component={Signup}  ></AuthRoute>
           </Switch>
           </div>
         </Router>
         </Provider>
         
       </MuiThemeProvider>
    );
  }
}

export default App;
