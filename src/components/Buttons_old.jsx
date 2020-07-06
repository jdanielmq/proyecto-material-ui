import React from 'react'
import {Button} from "@material-ui/core";

const Buttons = () => {
    return (
        <div>
            <Button variant="text" color="primary" className='mr-2'>
                Hola Mundo!
            </Button>   

            <Button variant="contained" color="secondary" className='mr-2 mb-2'>
                Secondary
            </Button> 

            <Button color="secondary" variant="outlined" className='mr-2 mb-2' disableElevation>
                outlined
            </Button>   

            <Button variant="outlined" color="primary" href="https://google.com" className='mt-2 mb-2'>
                Google
            </Button>     

            <Button variant="outlined" color="primary" className='mr-2 mt-2' fullWidth>
                fullWidth
            </Button>

            <Button variant="outlined" color="primary" className='mr-2 mt-2' size='small'>
                small
            </Button>
            
            <Button variant="outlined" color="primary" className='mr-2 mt-2' size='medium'>
                medium
            </Button>

            <Button variant="outlined" color="primary" className='mr-2 mt-2' size='large'>
                large
            </Button>
        </div>
    )
}

export default Buttons
