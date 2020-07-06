import React from 'react'

import Navbar from './Navbar';
import { Cajon } from './Cajon';

import { makeStyles, Hidden } from '@material-ui/core';
import { Caja } from './Caja';




const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
        },
        toolbar: theme.mixins.toolbar,
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
            background: theme.palette.background.default
        },

  }));


export const Contenedor = () => {

    const classes = useStyles()
    const [abrir, setAbrir] = React.useState(false)

    const accionAbrir = () => {
        setAbrir(!abrir)
    }

    return (
        <div className={classes.root}>
            <Navbar accionAbrir={accionAbrir} />
            <Hidden xsDown implementation="css">
                <Cajon
                 variant="permanent"
                 open={true}
                 />
            </Hidden>
            <Hidden smUp implementation="css">
                <Cajon
                 variant="temporary"
                 open={abrir}
                 onClose={accionAbrir}
                 />
            </Hidden>            
           
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Caja/>
        </main>
      </div>
    )
}
