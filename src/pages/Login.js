import React,{Component} from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import icon from '../images/icon.png';
import axios from 'axios';
import {Link} from 'react-router-dom';
//Mu
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';


const styles ={
    form:{
        textAlign:'center'
    },
    image:{
        margin:'20px auto 20px auto'
    },
    pageTitle:{
        margin:'10px auto 10px auto'
    },
    textField:{
        margin:'10px auto 10px auto'
    },
    button:{
        marginTop:20,
        position:'relative'
    },
    customError:{
        color:'red',
        marginTop:10
    },
    progress:{
        position:'absolute'
    }
}
class Login extends Component{
    constructor(){
        super();
        
        this.state={
            email:'',
            password:'',
            errors: {},
            loading: false
        }
    }

    handleSubmit = (event)=>{
         event.preventDefault();
        this.setState({
            loading:true
        });

        const userData ={
            email:this.state.email,
            password:this.state.password
        }
        axios
        .post('/login',userData)
        .then((res) =>{
            console.log(res.data);
            this.setState({
                loading:false
            });
            this.props.history.push('/')
        })
        .catch((err)=>{
          this.setState({
            errors: err.response.data,
            loading: false
          });
        })
    };

    handleChange = (event)=>{
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    render(){
        const {classes}=this.props;
        const {errors,loading}=this.state;

        return(
            <Grid container className={classes.form}>
                <Grid item sm></Grid>
                <Grid sm item>
                    <img src={icon} alt="AppIcon"  className={classes.image} width='90px' height ='90px'></img>
                    <Typography variant='h3' className={classes.pageTitle}>Login</Typography>

                    <form noValidate onSubmit={this.handleSubmit} >
                        <TextField 
                        id='email'
                        name='email'
                        type='email'
                        label='Email'
                        className={classes.textField}
                        helperText={errors.email}
                        error={errors.email ? true : false}
                        value={this.state.email}
                       onChange={this.handleChange}
                       fullWidth>
                       </TextField>
                        <TextField
                         id='password'
                         name='password'
                         type='password'
                         label="Password"
                         className={classes.textField}
                         helperText={errors.password}
                         error={errors.password ? true : false}
                         value={this.state.password}
                        onChange={this.handleChange}
                         fullWidth>
                         </TextField>
                         {errors.general && (
                             <Typography variant='body2' className={classes.customError}>
                                 {errors.general}
                                 </Typography>
                         )}
                         <Button variant='contained'
                         color='primary' 
                         id='button'
                         name='button'
                         type='submit'
                         disabled={loading}
                         className={classes.button}>
                             Login
                            {loading &&  <CircularProgress size={30} className={classes.progress}/>}
                             </Button>

                             <br/>
                             <small>Don't have an account signup <Link to='/signup'>here</Link></small>
                    </form>
                </Grid>
                <Grid item sm>
                   
                </Grid>
            </Grid>
        )
    }
}
export default withStyles(styles)(Login);