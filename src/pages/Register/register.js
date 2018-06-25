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



class Register extends React.Component {
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
                User Registration
              </Typography>
      <TextField
        required
        id="name"
        label="Name"
        defaultValue="name"
        className={classes.textField}
        margin="normal"
      />

        <TextField
          required
          id="email"
          label="Email"
          defaultValue="email"
          className={classes.textField}
          margin="normal"
        />

        <TextField
          required
          id="username"
          label="Username"
          rowsMax="4"
          defaultValue="username"
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="password-input"
          label="Password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
        />
      </form>
      </Paper>

    );
  }
}

Register.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Register);
