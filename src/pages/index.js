import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import HomeIcon from '@material-ui/icons/Home';
import Divider from '@material-ui/core/Divider';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import MessageIcon from '@material-ui/icons/Message';
import { Link } from 'react-router-dom';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import 'typeface-roboto';

{/* index.js renders the top app bar */}



{/* drawer width */}
const drawerWidth = 250;

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appFrame: {
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  flex: {
    flex: 1,
    display: 'inline-flex',
    fontWeight: theme.typography.fontWeightLight,
    fontSize: 23,
    flexDirection: 'row',
  },
  navFlex:{
    flex: 1,
    display: 'inline-flex',
    fontWeight: theme.typography.fontWeightLight,
    fontSize: 20,
    flexDirection: 'column',
  },

  text: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
     margin: theme.spacing.unit,
     textAlign: 'center',
     position: 'relative',
     //overflow: 'hidden',
    },

   input: {
     display: 'none',
   },

   lineDivide:{
     width: '100%',
     maxWidth: '500px',
  },

  appBar: {
    position: 'absolute',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },

  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  'appBarShift-left': {
    marginLeft: drawerWidth,
  },
  'appBarShift-right': {
    marginRight: drawerWidth,
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },

  drawerPaper: {
    position: 'absolute',
    width: drawerWidth,
    flex: '1 0 auto',
    overflow: 'hidden',
    padding: theme.spacing.unit * 2,
  },

  // Navigation Header
  drawerHeader: {
    display: 'flex',
    textAlign: 'left',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },

  'content-left': {
    marginLeft: -drawerWidth,
  },

  'content-right': {
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  'contentShift-left': {
    marginLeft: 0,
  },
  'contentShift-right': {
    marginRight: 0,
  },
});


{/* declare pathways */}
const HomeLink = props => <Link to="/home" {...props} />
const AboutLink = props => <Link to="/about" {...props} />
const TopicsLink = props => <Link to="/topics" {...props} />

class Index extends React.Component {
  state = {
    open: false,
    anchor: 'left',
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleChangeAnchor = event => {
    this.setState({
      anchor: event.target.value,
    });
  };

  render() {
    const { classes, theme } = this.props;
    const { anchor, open } = this.state;

const drawer = (
    <Drawer
            variant="responsive"
            anchor={anchor}
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={this.handleDrawerClose}>
                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
              </IconButton>
              <Typography variant="title" color="primary" className={classes.navFlex} noWrap>
                Design in Mind
              </Typography>
            </div>
            <Divider className={classes.lineDivide}/>
            <div className={classes.button}>

            {/* Home Link */}
            <IconButton component={HomeLink} variant="contained" color="primary" className={classes.button} aria-label="Home">
              <HomeIcon />
            </IconButton>


           {/* Editor Link */}
           <IconButton component={AboutLink} variant="contained" color="primary" className={classes.button} aria-label="About">
             <KeyboardIcon />
           </IconButton>

          {/* Topics Link */}
          <IconButton component={TopicsLink} variant="contained" color="primary" className={classes.button} aria-label="Topics">
            <MessageIcon />
          </IconButton>
          </div>
    </Drawer>

        );

        let before = null;
        let after = null;

           if (anchor === 'left') {
             before = drawer;
           } else {
             after = drawer;
           }

   return (
     <div className={classes.root}>
          <AppBar position="static"
            className={classNames(classes.appBar, {
              [classes.appBarShift]: open,
              [classes[`appBarShift-${anchor}`]]: open,
            })}
          >
            <Toolbar disableGutters={!open}>

              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(classes.menuButton, open && classes.hide)}
              >

                <MenuIcon />
              </IconButton>

              {/* AppBar Title */}
                <Typography variant="title" color="inherit" className={classes.flex}>
                  UI Design
                </Typography>
               {/* AppBar Nav Icons Begin */}
                  <div>
                  {/* Home Link */}
                  <IconButton component={HomeLink} variant="contained" color="secondary" className={classes.menu} aria-label="Home">
                    <HomeIcon />
                  </IconButton>
                 {/* Editor Link */}
                 <IconButton component={AboutLink} variant="contained" color="secondary" className={classes.menu} aria-label="About">
                   <KeyboardIcon />
                 </IconButton>
                {/* Topics Link */}
                <IconButton component={TopicsLink} variant="contained" color="secondary" className={classes.menu} aria-label="Topics">
                  <MessageIcon />
                </IconButton>
              </div>

            </Toolbar>
          </AppBar>
          {before}
          <main
            className={classNames(classes.content, classes[`content-${anchor}`], {
              [classes.contentShift]: open,
              [classes[`contentShift-${anchor}`]]: open,
            })}
          >
            <div className={classes.drawerHeader} />

          </main>
          {after}
        </div>
    );
  }
}


Index.propTypes = {
 classes: PropTypes.object.isRequired,
 theme: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles, { withTheme: true })(Index));
