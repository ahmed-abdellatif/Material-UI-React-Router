import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Home from '@material-ui/icons/Home';
import Code from '@material-ui/icons/Code';
import InsertComment from '@material-ui/icons/InsertComment';
import Share from '@material-ui/icons/Share';

import {
  Link
} from 'react-router-dom'
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing.unit,
  },
  flex: {
    flex: 1,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
  menuButton: {
    marginLeft: -6,
  },
 });



const HomeLink = props => <Link to="/" {...props} />
const EditorLink = props => <Link to="/editor" {...props} />
const TopicsLink = props => <Link to="/topics" {...props} />
const LoginLink = props => <Link to="/login" {...props} />
const RegisterLinks = props => <Link to="/register" {...props} />




class Index extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
  };

  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);



   return (
  <div className={classes.root}>
       <FormGroup>
         <FormControlLabel
           control={
             <Switch checked={auth} onChange={this.handleChange} aria-label="LoginSwitch" />
           }
           label={auth ? 'Logout' : 'Login'}
         />
       </FormGroup>
       <AppBar position="static">

         <Toolbar>

           <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
             <MenuIcon />
           </IconButton>

           <Typography variant="title" color="inherit" className={classes.flex}>
             Codex <Share className={classes.rightIcon} style={{position: 'relative', verticalAlign:'middle', top:-2, left:-9}}   />
           </Typography>

           {auth && (
             <div>

             {/* Home Link */}
             <Button component={HomeLink} variant="contained" color="primary" className={classes.button}>
               Home
              <Home className={classes.rightIcon} />
             </Button>

            {/* Editor Link */}
             <Button component={EditorLink} variant="contained" color="primary" className={classes.button}>
              Code Editor
              <Code className={classes.rightIcon} />
             </Button>

           {/* Topics Link */}
            <Button component={TopicsLink} variant="contained" color="primary" className={classes.button}>
             Topic Box
             <InsertComment className={classes.rightIcon} />
            </Button>

               <IconButton
                 aria-owns={open ? 'menu-appbar' : null}
                 aria-haspopup="true"
                 onClick={this.handleMenu}
                 color="inherit"
               >
                 <AccountCircle />
               </IconButton>

               <Menu
                 id="menu-appbar"
                 anchorEl={anchorEl}
                 anchorOrigin={{
                   vertical: 'top',
                   horizontal: 'right',
                 }}
                 transformOrigin={{
                   vertical: 'top',
                   horizontal: 'right',
                 }}
                 open={open}
                 onClose={this.handleClose}
               >

               {/* Login Link */}
                <MenuItem
                onClick={this.handleClose}
                component={LoginLink}
                >
                Login
               </MenuItem>

              {/* Register Link */}
               <MenuItem
                  onClick={this.handleClose}
                  component={RegisterLinks}
                >Register</MenuItem>

               </Menu>
             </div>
           )}
         </Toolbar>
       </AppBar>
     </div>
   );
 }
}


Index.propTypes = {
 classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));
