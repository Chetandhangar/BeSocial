import React,{Component}from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';
import {MuiThemeProvider}from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import themePage from './util/theme';
import jwtDecode from 'jwt-decode';

//redux
import { Provider } from 'react-redux';
import store from './redux/stores';
//component
import Header from './components/Header';
//pages
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
//util 
import AuthRoute from './util/AuthRoute';

const theme = createMuiTheme(themePage);

let authenticated;
const token = localStorage.FBIdToken;
if(token){
  const decodedToken = jwtDecode(token);
  if(decodedToken.exp * 1001 < Date.now()){
    window.location.href = '/login'
    authenticated=false;
  }else{
    authenticated=true;
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
             <AuthRoute path='/login' component={Login} authenticated={authenticated}></AuthRoute>
             <AuthRoute path='/signup' component={Signup} authenticated={authenticated} ></AuthRoute>
           </Switch>
           </div>
         </Router>
         </Provider>
         
       </MuiThemeProvider>
    );
  }
}

export default App;
