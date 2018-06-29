import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import MessageIcon from '@material-ui/icons/Message';
import IconButton from '@material-ui/core/IconButton';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import { Link } from 'react-router-dom';
import 'typeface-roboto'



import Typography from '@material-ui/core/Typography';

  const styles = theme => ({
    root: {
      flex: '1 0 100%',
    },
    text: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    hero: {
    minHeight: '80vh',
    flex: '0 0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.type === 'light' ? theme.palette.primary.dark : theme.palette.primary.main,
  },
    title: {
      letterSpacing: '.5rem',
      textIndent: '.5rem',
      fontWeight: theme.typography.fontWeightLight,
      [theme.breakpoints.only('xs')]: {
        fontSize: 35,
      },
      whiteSpace: 'nowrap',
    },
    headline: {
      paddingLeft: theme.spacing.unit * 4,
      paddingRight: theme.spacing.unit * 4,
      marginTop: theme.spacing.unit,
      maxWidth: 500,
      display: 'inline-flex',
      textAlign: 'center',
    },
    content: {
      paddingBottom: theme.spacing.unit * 8,
      paddingTop: theme.spacing.unit * 8,
      [theme.breakpoints.up('sm')]: {
        paddingTop: theme.spacing.unit * 12,
      },
    },
    button: {
       margin: theme.spacing.unit,
       textAlign: 'center',
       position: 'relative',

      },
    logo: {
      margin: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 4}px`,
      width: '100%',
      height: '35vw',
      maxHeight: 200,
    },
    steps: {
      maxWidth: theme.spacing.unit * 130,
      margin: 'auto',
    },
    step: {
      padding: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 2}px`,
    },
    stepIcon: {
      marginBottom: theme.spacing.unit,
    },
    icon: {
      fontSize: 70,
    },
  });
const TopicsLink = props => <Link to="/topics" {...props} />


function PaperSheet(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>

      <div className={classes.hero}>
        <div className={classes.content}>
          <div className={classes.text}>
            <Typography
              variant="display3"
              align="center"
              component="h1"
              color="inherit"
              gutterBottom
              className={classes.title}
            >
              {'React Materialized'}
            </Typography>
            <Typography
              variant="headline"
              component="h2"
              color="inherit"
              gutterBottom
              className={classes.headline}
            >
              {"Material UI Components for React JS"}
            </Typography>
            <div className={classes.button}>
            {/* Editor Link */}
            <IconButton component={TopicsLink} variant="contained" color="primary" className={classes.button} aria-label="Editor">
              <MessageIcon className= {classes.icon} />
            </IconButton>

            </div>
          </div>
          </div>
          </div>



    </div>
  );
}



PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);
