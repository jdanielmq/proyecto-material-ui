import React from 'react'

import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Icon from '@material-ui/core/Icon';
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/core/IconButton'



const ButtonsIcono = () => {
    return (
        <div>

            <DeleteIcon color="primary" fontSize="large" />

            
            <Icon className="fa fa-plus-circle" >
            star
            </Icon>

            <Button variant="contained" color="primary" startIcon={<DeleteIcon />}>
                Eliminar
            </Button>


            <IconButton aria-label="delete" color="primary">
                <DeleteIcon />
            </IconButton>

            <Fab color="secundary" aria-label="add">
                <AddIcon aria-label="add"/> 
            </Fab>

        </div>
    )
}

export default ButtonsIcono
