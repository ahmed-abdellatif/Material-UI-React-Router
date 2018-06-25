import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  container: {
    display: 'block',
    flexWrap: 'wrap',
    textAlign: 'center'

  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 500,
  },
  menu: {
    width: 500,
    textAlign: 'center'
  },
});



class Login extends React.Component {
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root} elevation={5} style={{paddingTop:60, paddingBottom:60, textAlign:'center'}}  >
      <form className={classes.container} noValidate autoComplete="off">
              <Typography variant="headline" component="h2">
                User Login
              </Typography>

        <TextField
          required
          id="email"
          label="Email"
          defaultValue="email"
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="account-password-input"
          label="Account Password"
          className={classes.textField}
          type="account-password"
          autoComplete="current-password"
          margin="normal"
        />
      </form>
      </Paper>

    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
