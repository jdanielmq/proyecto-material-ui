import React from 'react'

import { 
        Box,
        Grid,
        withWidth,
        makeStyles
    } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

    fondo: {
        background: theme.palette.secondary,
      },

  }));


export const Caja = (props) => {
    const classes = useStyles()
    return (
        <div>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={3} className={classes.fondo}>
            <Box
              bgcolor="primary.main"
              color="primary.contrastText"
              p={2}
              textAlign="center"
            >
              {props.width}
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={3} className={classes.fondo}>
            <Box
              bgcolor="primary.main"
              color="primary.contrastText"
              p={2}
              textAlign="center"
            >
              {props.width}
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={3} className={classes.fondo}>
            <Box
              bgcolor="secondary.main"
              color="secondary.contrastText"
              p={2}
              textAlign="center"
            >
              {props.width}
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={3} className={classes.fondo}>
            <Box
              bgcolor="secondary.main"
              color="secondary.contrastText"
              p={2}
              textAlign="center"
            >
              {props.width}
            </Box>
          </Grid>
        </Grid>
      </div>
    )
};
export default withWidth()(Caja);
