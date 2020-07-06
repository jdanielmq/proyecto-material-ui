import React from 'react'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';

import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },

    title:{
      flexGrow: 1
    },

    appBar: {
      [theme.breakpoints.up('sm')]: {
          width: `calc(100% - ${240}px)`,
          marginLeft: 240,
        },
      },

  }));


const Navbar = (props) => {

    const classes = useStyle();

    return (
        <AppBar position="fixed" color="primary" className={classes.appBar}>
          <Toolbar>
            <IconButton 
                  edge="start" 
                  className={classes.menuButton} 
                  color="inherit" 
                  aria-label="menu"
                  onClick={()=> props.accionAbrir()}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>App Prueba</Typography>

            <Button variant="text" color="inherit">
              Login
            </Button>

          </Toolbar>
        </AppBar>
    )
}

export default Navbar
