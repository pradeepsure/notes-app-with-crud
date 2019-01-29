import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Typography from '@material-ui/core/Typography';
import SearchBar from './SearchBar';
import { Button } from '@material-ui/core';
import {firebase, googleAuthProvider} from '../firebase/firebase';


const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow:1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
});

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: localStorage.getItem('isLoggedIn') || false
    }; 
    this.handleLogin=this.handleLogin.bind(this);
    this.handleLogOff=this.handleLogOff.bind(this); 
    this.onToggleChange = this.onToggleChange.bind(this);  
  }  
  onToggleChange() {
    const changeView = this.props.viewType === 'gridView' ? 'listView' : 'gridView';
    this.props.toggleView(changeView);
  }

  handleLogin(){
    return firebase.auth().signInWithPopup(googleAuthProvider)
    .then(()=>{
      this.setState({ isLoggedIn: true });
      localStorage.setItem('isLoggedIn', true);
    });
  }

  handleLogOff(){
    return firebase.auth().signOut()
    .then(()=>{
      this.setState({ isLoggedIn: false });
      localStorage.removeItem('isLoggedIn');
    })
  }

  render(){
    const { classes, viewType } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
          <AssignmentIcon />
          <Typography className={classes.title} variant="h6" color="inherit" noWrap>
            Keep - Notes
          </Typography>  
            {(this.state.isLoggedIn)?<SearchBar />: ''}       
            <div className={classes.grow}></div>
              <Button onClick={this.state.isLoggedIn ? this.handleLogOff: this.handleLogin}>
               {this.state.isLoggedIn ? 'SignOff' : 'Login'  }
              </Button>
              {/* <Button variant="contained" color="secondary" className={classes.button} onClick={this.onToggleChange}>
                {viewType === 'gridView' ? 'List' : 'Grid'}
              </Button> */}
          </Toolbar>
        </AppBar>
      </div>
    );
  }


}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);    // HOC -> Higher Order Component which takes another compoennt as an argument
