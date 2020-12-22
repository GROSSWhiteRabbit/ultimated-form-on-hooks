import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyleForm = makeStyles((them)=> ({
    root: {
        marginTop: them.spacing(1),
        width: '100%',
    }
}))
export const Form = ({children, ...props}) => {
    const styleForm = useStyleForm();
    return (
        <form className={styleForm.root} noValidate {...props}>
            {children}
        </form>
    )
}