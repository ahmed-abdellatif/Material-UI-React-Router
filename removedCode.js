{/*
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

                <MenuItem
                onClick={this.handleClose}
                component={LoginLink}
                >
                Login
               </MenuItem>


               <MenuItem
                  onClick={this.handleClose}
                  component={RegisterLinks}
                >Register</MenuItem>

               </Menu>*/}



               //{/* drawer event handler => slide out menu   */}
                handleDrawerToggle = () => {
                    this.setState({ mobileOpen: !this.state.mobileOpen });
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
