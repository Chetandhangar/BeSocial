import React,{Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import Scream from '../components/Scream';

//component
import Profile from '../components/Profile';

class Home extends Component{
     state={
        screams:null
    }
    componentDidMount(){
        axios.get('/screams')
        //console.log(res.data)
            .then(res =>{
            this.setState({
                screams: res.data
            })
        })
        .catch(err=>console.log(err));
    }
    render(){
        let recentpostMarkup = this.state.screams ? (
        this.state.screams.map((scream) => <Scream  scream={scream} />)
        ) : <p>Loading...</p>
        return(
           <Grid container  spacing={10}>
               <Grid item sm={8} xs={12}>
                   {recentpostMarkup}
               </Grid>
               <Grid item sm={4} xs={12}>
                   <Typography variant='h5'><Profile /></Typography>
               </Grid>
           </Grid>
        );
    }
}
export default Home;