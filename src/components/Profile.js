import React,{Fragement}from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
//import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import dayjs from 'dayjs';
//redux
import {connect} from 'react-redux';
import {uploadImage} from '../redux/actions/userActions';


//Mui
import MuiLink from '@material-ui/core/Link';
import Typography  from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip'
//MuiIcons
import LocationOn from '@material-ui/icons/LocationOn';
import LinkIcon from '@material-ui/icons/Link';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import EditIcon from '@material-ui/icons/Edit';
//const
const styles = (theme) => ({
    paper: {
      padding: 20
    },
    profile: {
      '& .image-wrapper': {
        textAlign: 'center',
        position: 'relative',
        '& button': {
          position: 'absolute',
          top: '80%',
          left: '70%'
        }
      },
      '& .profile-image': {
        width: 200,
        height: 200,
        objectFit: 'cover',
        maxWidth: '100%',
        borderRadius: '50%'
      },
      '& .profile-details': {
        textAlign: 'center',
        '& span, svg': {
          verticalAlign: 'middle'
        },
        '& a': {
          color: theme.palette.primary.main
        }
      },
      '& hr': {
        border: 'none',
        margin: '0 0 10px 0'
      },
      '& svg.button': {
        '&:hover': {
          cursor: 'pointer'
        }
      }
    },
    buttons: {
      textAlign: 'center',
      '& a': {
        margin: '20px 10px'
      }
    }
  });

class Profile extends React.Component{
  profileChange (event) {
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append('image', image, image.name);
    uploadImage(formData);
  };
  handleEditProifle = () =>{
    const fileInput = document.getElementById('imageInput');
    fileInput.click();
  }
    render(){
        const {classes, user:
        {credentials:{handle, createdAt, imageUrl, bio, website, location},
        loading,
        authenticated
    }
    } = this.props;

    let profileMarkup = !loading ? (authenticated ? (
        <Paper className={classes.paper}>
            <div className={classes.profile}>
                <div className="image-wrapper">
                    <img src={imageUrl} alt="profile-image" className="profile-image"></img>
                     <input type="file" onChange={this.profileChange} 
                     hidden="hidden"
                     id="imageInput">
                    </input>
                    <Tooltip title="Edit Profile Picture">
                    <IconButton onClick={this.handleEditProifle} className="button">
                      <EditIcon color="primary"/>
                    </IconButton>
                    </Tooltip>
                </div>
                <hr/>
                <div className="profile-detials">
                <MuiLink component={Link} to={`/users/${handle}`} color="primary" variant="h5">
                    @{handle}
                </MuiLink>
                <hr/>
                {bio && <Typography variant="body2"></Typography>}
                <hr/>
                {location && (
                    <Fragement>
                        <LocationOn  color="primary"/><span>{location}</span>
                        <hr/>
                    </Fragement>
                )}
                {website && (
                    <Fragement>
                        <LinkIcon color="primary"/>
                        <a href={website} target="_blank" rel="noopemer noreferre">
                            {' '}{website}
                        </a>
                        <hr/>
                    </Fragement>
                )}
                <CalendarTodayIcon color="primary"/>{' '}
                <span>Joined {dayjs(createdAt).format('MMM YYYY')}</span>
                </div>
            </div>

        </Paper>
    ) : (
        <Paper className={classes.paper}>
            <Typography variant="body2" align="center">
                NO, Profile Found Please Login again
            </Typography>
            <div className={classes.buttons}>
                <Button variant="contained" color="primary" component={Link} to='login'>
                    Login
                </Button>
                <Button variant="contained" color="primary" component={Link} to='login'>
                    SignUp
                </Button>
            </div>
        </Paper>
    )) : (<p>loading...</p>)
    
    return profileMarkup;
    
}
}

/*Profile.propTypes = {
    classes: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
}*/

const mapStateToProps = (state) => ({
    user: state.user
});

const mapActionsToProps = {
  uploadImage
};



export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(Profile));
