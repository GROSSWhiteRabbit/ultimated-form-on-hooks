import { makeStyles, TextField } from '@material-ui/core';
import React, { forwardRef } from 'react';

// const useStyleInput = makeStyles((them)=>({
//     root: {
//         margin: them.spacing(1, 0, 3)
//     }
// }))

export const Input = forwardRef((props, ref)=>{
    // const styleInput  = useStyleInput();
    return ( 
        <TextField
            color='primary'
            inputRef={ref}
            fullWidth
            margin='normal'
            // className={styleInput.root} 
            variant="outlined" {...props}>
            {props.children}
        </TextField>
    )
}) 