import React from 'react'
import {withWidth, Typography, Button, Hidden} from '@material-ui/core'

const Oculto = (props) => {
    return (
        <div>
            <Typography variant="h6" color="initial">
                    {props.width}
            </Typography>
            <Hidden xsDown>
                <Button variant="text" color="primary">
                   XS
                </Button>
            </Hidden>
            <Hidden smDown>
                <Button variant="text" color="secondary">
                    SM
                </Button>

            </Hidden>

        </div>
    )
}

export default withWidth()(Oculto)
