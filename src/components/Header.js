import React,{Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import{Link} from 'react-router-dom';

class Header extends Component{
    render(){
        return(
            <AppBar position="fixed">
                <Toolbar className='header-container'>
                    <Button color="inherit" component={Link} to="/">Home</Button>
                    <Button color="inherit" component ={Link} to="/login" >Login</Button>
                    <Button color="inherit" component={Link} to="/signup">Signup</Button>
                </Toolbar>
            </AppBar>
        )
    }
}

export default Header;