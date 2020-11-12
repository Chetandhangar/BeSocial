import React,{Fragment}from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
//redux
import {connect} from 'react-redux' ;
//Mui
//const
const styles = {

} ;

class Profile extends React.Component{
    render(){
        const {classes, user:
        {credentials:{handle, createdAt, imageUrl, bio, website, location},
        loading,
    }
    } = this.props;

    //let profileMarkup = !isloading ? () : (<p>loading...</p>)
    
    return profileMarkup;
    
}
}

Profile.propTypes = {
    classes: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    user: state.user
});



export default connect(mapStateToProps)(withStyles(Profile));