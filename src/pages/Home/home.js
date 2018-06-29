import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import LineWeightIcon from '@material-ui/icons/LineWeight';
import SimpleCard from '../components/SimpleCard';
import withRoot from '../../withRoot';

import 'typeface-roboto'
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
      flex: '1 0 100%',
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
    text: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      letterSpacing: '.3rem',
      textIndent: '.3rem',
      flexDirection: 'column',
      fontWeight: theme.typography.fontWeightLight,
      marginBottom: theme.spacing.unit,
      [theme.breakpoints.only('xs')]: {
        fontSize: 28,
      },
      whiteSpace: 'nowrap',
    },
    headline: {
      paddingLeft: theme.spacing.unit * 4,
      paddingRight: theme.spacing.unit * 4,
      fontWeight: theme.typography.fontWeightLight,
      marginTop: theme.spacing.unit ,
      letterSpacing: '.1rem',
      maxWidth: 500,
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
      margin: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 4}px`,
        textAlign: 'center',

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
    markdownElement: {},
  icon: {
    fontSize: 70,
  },
  //{/* card component style class */}
  containCard: {
    margin: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 4}px`,

  }
});

class Home extends React.Component {

  render() {
    const classes = this.props.classes;

    return (
        <div className={classes.root}>


      <div className={classes.hero}>
        <div className={classes.content}>
          <div className={classes.text}>
            <Typography
              variant="display3"
              align="center"
              component="h2"
              color="primary"
              gutterBottom
              className={classes.title}
            >
              {'Material Design'}
            </Typography>

            <Typography
              variant="headline"
              component="h2"
              color="primary"
              gutterBottom
              className={classes.headline}
            >
              {" React UI Components"}
            </Typography>

  {/* display card component */}
  <div className={classes.containCard}>
        <SimpleCard />
  </div>

            <div className={classes.button}>
            <Button variant="fab" color="primary" aria-label="add">
             <LineWeightIcon />
            </Button>
            </div>

          </div>
         </div>
       </div>
    </div>
  );
 }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles, { withTheme: true })(Home));
