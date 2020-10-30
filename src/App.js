import React,{Component}from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
//pages

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import './App.css';

class App extends Component {
  render(){
    return (
       <div className="App">
         <Router>
           <Switch>
             <Route exact path='/' component={Home}></Route>
             <Route path='/login' component={Login}></Route>
             <Route path='/signup' component={Signup}></Route>
           </Switch>
         </Router>
       </div>  
    );
  }
}

export default App;
