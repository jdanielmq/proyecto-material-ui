import React from 'react'

import { 
    makeStyles, 
    Drawer, 
    Divider
} from '@material-ui/core';
import Lista from './Lista';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    drawerPaper: {
        width: drawerWidth,
      },
    toolbar: theme.mixins.toolbar,

  }));

export const Cajon = (props) => {
    const classes = useStyles();
    return (
        <Drawer
        className={classes.drawer}
        variant={props.variant}
        classes={{ 
                    paper: classes.drawerPaper,
                }}
        anchor="left"
        open={props.open}
        onClose={props.onClose ? props.onClose: null }>

            <div className={classes.toolbar}/>
            <Divider/>
            <Lista/>
            
        </Drawer>
    )
}
