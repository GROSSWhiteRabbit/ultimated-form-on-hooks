import { Divider, ListItem, ListItemText, makeStyles } from '@material-ui/core';
import React from 'react';
import { useDataContext } from '../contextData';

const style = makeStyles(theme=>({

    listItem: {
        


        
    },
    textKey:{
        textAlign:'start',

    },
    textValue:{
        textAlign:'end',

    }
}))

export const ListItems = ()=> {
    const classes = style();
    const arrDataItems = []
    const { data } = useDataContext();
    for(let key in data ) {
        if(key !== 'files' && key !== 'hasPhone'){
            arrDataItems.push(
                <ListItem key={key} className={classes.listItem} >
                    <ListItemText align className={classes.textKey} primary={key}/>
                    <ListItemText className={classes.textValue} primary={data[key]}/>
                </ListItem>
            )
            arrDataItems.push(<Divider key={key+'D'} />)
        }
    }
    arrDataItems.pop()
    return arrDataItems
}