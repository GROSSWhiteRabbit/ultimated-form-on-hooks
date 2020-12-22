import { Button, makeStyles } from "@material-ui/core";
import { CommunicationImportExport } from "material-ui/svg-icons";
import React from "react";

const style = makeStyles(them=>({
    button: {
        margin: them.spacing(2),
        
    },
    
}))

export const SubmitButton = ({children, ...props})=>{
    const classes = style()
    return (
        <Button className={classes.button} fullWidth color='primary' type='submit' variant='contained' {...props}>
            {children}
        </Button>
    )
}