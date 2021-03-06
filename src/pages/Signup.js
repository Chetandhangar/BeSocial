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

//REDUX
import {connect} from 'react-redux';
import {signupUser} from  '../redux/actions/userActions';


const styles={
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
class Signup extends Component{
    constructor(){
        super();
        
        this.state={
            email:'',
            password:'',
            cofirnPassword:'',
            handle:'',
            errors: {},
        }
    };

    componentWillReceiveProps(nextProps)  {
        if(nextProps.UI.errors){
            this.setState({errors : nextProps.UI.errros})
        }
    }

    handleSubmit = (event)=>{
         event.preventDefault();
            const newUserData ={
            email:this.state.email,
            password:this.state.password,
            confirmPassword: this.state.confirmPassword,
            handle:this.state.handle
        }
      this.props.signupUser(newUserData, this.props.history);
    };

    handleChange = (event)=>{
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    render(){
        const {classes, UI: {loading}}=this.props;
        const {errors}=this.state;

        return(
            <Grid container className={classes.form}>
                <Grid item sm></Grid>
                <Grid sm item>
                    <img src={icon} alt="AppIcon"  className={classes.image} width='90px' height ='90px'></img>
                    <Typography variant='h3' className={classes.pageTitle}>Signup</Typography>

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
                         <TextField
                         id='confirmPassword'
                         name='confirmPassword'
                         type='password'
                         label="confirmPassword"
                         className={classes.textField}
                         helperText={errors.confirmPassword}
                         error={errors.confirmPassword ? true : false}
                         value={this.state.confirmPassword}
                        onChange={this.handleChange}
                         fullWidth>
                         </TextField>
                         <TextField
                         id='handle'
                         name='handle'
                         type='text'
                         label="handle"
                         className={classes.textField}
                         helperText={errors.handle}
                         error={errors.handle ? true : false}
                         value={this.state.handle}
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
                             Signup
                            {loading &&  <CircularProgress size={30} className={classes.progress}/>}
                             </Button>

                             <br/>
                             <small>Already have an account login <Link to='/login'>here</Link></small>
                    </form>
                </Grid>
                <Grid item sm>
                   
                </Grid>
            </Grid>
        )
    }
};

const mapStateToProps = (state) => ({
    user: state.user,
    UI : state.UI
});

const mapActionsToProps = {
    signupUser
}


export default connect(mapStateToProps, mapActionsToProps )(withStyles(styles)(Signup));