import React,{Component}from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';

//component
import Header from './components/Header';
//pages
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';


class App extends Component {
  render(){
    return (
       <div className="App">
         <Router>
         <Header/>
           <div className="container">
           
           <Switch>
             <Route exact path='/' component={Home}></Route>
             <Route path='/login' component={Login}></Route>
             <Route path='/signup' component={Signup}></Route>
           </Switch>
           </div>
         </Router>
       </div>  
    );
  }
}

export default App;
