import React,{Component} from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import {Link} from 'react-router-dom';

//card component 
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { CardMedia } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import {Button} from '@material-ui/core';

const styles={
    card:{
        display:'flex',
        marginBottom :20,
},
image:{
    minWidth : 200,
    //height:1200
},
content:{
    padding:25,
}
}
class Scream extends Component{
    render(){
        const {classes,scream:{body, createdAt, userImage, userHandle, screamId, likeCount, commentCount}}= this.props
        return(
         <Card className={classes.card} >
             <CardMedia image={userImage}  className={classes.image}></CardMedia>
             <CardContent className={classes.content}>
              <Typography variant='h5' component={Link} to={`/users/${userHandle}`}>{userHandle}</Typography>
              <Typography variant='body2'>{createdAt}</Typography>
              <Typography variant='body1'>{body}</Typography>

             </CardContent>
         </Card>
        );
    }
}
export default withStyles(styles)(Scream);