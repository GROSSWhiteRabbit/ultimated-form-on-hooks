import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    makeStyles,
    Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { useDataContext } from "../contextData";
import { ListItems } from "./listItems";
import { MainContainer } from "./mainContainer";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import { checkLenghtFileName } from "../services/checkLenghtFileName";
import { SubmitButton } from "./submitButton";
import Confetti from "react-confetti";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const style = makeStyles((them) => ({
    list: {
        margin: them.spacing(2),
        width: "100%",
        border: "1px solid #999999",
        borderRadius: "4px",
    },
}));

export const LastStep = () => {
    const [isDone, setIsDone] = useState(false)

    const classes = style();
    const { data } = useDataContext();

    const onSubmit=()=>{
        setIsDone(true)
        Swal.fire(
            'You good human',
            'You can go rest',
            'success'
            )
    }



    return (
        <>
        <MainContainer>
        {isDone?(
            <Confetti width={document.documentElement.clientWidth} height={document.documentElement.clientHeight}/>

        ):(
            <>
            <Typography component="h2" variant="h4">
                📝 Form Values
            </Typography>
            <List className={classes.list}>
                <ListItems />
            </List>
            {data?.files?.length !== 0 && (
                <>
                    <Typography component="h2" variant="h4">
                        📦 Files
                    </Typography>
                    <List  style={{ width: "100%" }}>
                        {data?.files?.map((file, index) => {
                            return (
                                <ListItem key={index}>
                                    <ListItemIcon>
                                        <InsertDriveFileIcon color="action" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={checkLenghtFileName(file.name)}
                                        secondary={file.size}
                                    />
                                </ListItem>
                            );
                        })}
                    </List>
                </>
            )}
            <Link to='/'>start over</Link>
            <SubmitButton onClick={onSubmit}>Submit</SubmitButton>
            </>
        )}
        
        
        </MainContainer>
        </>
    );
};
