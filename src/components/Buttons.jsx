import React from 'react'
import {Button} from "@material-ui/core";

const Buttons = () => {
    return (
        <>
            <Button variant="text" color="primary" className='mr-2'>
            Hola Mundo!
            </Button>   
            <br/>
            <Button variant="contained" color="secondary" className='mr-2 mb-2'>
                Secondary
            </Button> 
            <br/>
            <Button color="secondary" variant="outlined" className='mr-2 mb-2' disableElevation>
                outlined
            </Button>   
            <br/>
            <Button variant="outlined" color="primary" href="https://google.com" className='mt-2 mb-2'>
                Google
            </Button>   
        </>
    )
}

export default Buttons
