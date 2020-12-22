import { Avatar, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, makeStyles, Typography } from "@material-ui/core";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useDataContext } from "../contextData";
import { MainContainer } from "./mainContainer";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import { SubmitButton } from "./submitButton";
import { useHistory } from "react-router-dom";
import { checkLenghtFileName } from "../services/checkLenghtFileName";

const useStyle = makeStyles((them) => ({
    dropzoneP: {
        padding: them.spacing(10, 2, 10),
        textAlign: "center",
        border: "2px dashed #212121",

        width: them.spacing(50),
    },
    dropzonePActive: {
        background: "#fafafa",
    },
    dropzone: {
        outline: "none",
        cursor: "pointer",
    },

    
}));

export const Step3 = () => {
    const style = useStyle();
    const { setObjData, data } = useDataContext();
    const history = useHistory()

    const onDrop = useCallback((acceptedFiles) => {
        console.log(acceptedFiles);
        setObjData((prevData) => ({
            files: [...acceptedFiles, ...prevData.files],
        }));
    }, []);

    const onDeleteFile = (index) => {
        setObjData((prevData) => ({
            files: [
                ...prevData.files.slice(0, index),
                ...prevData.files.slice(index + 1, prevData.files.lenght),
            ],
        }));
    };
    const onClickButton = ()=> {
        history.push('/lastStep')
    }

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
    });
    return (
        <MainContainer>
            <Typography component="h2" variant="h4">
                🦄 step 3
            </Typography>
            <div className={style.dropzone} {...getRootProps()}>
                <input {...getInputProps()} />
                {isDragActive ? (
                    <p className={
                            style.dropzoneP + " " + style.dropzonePActive
                        }
                    >
                        Drop the files here ...
                    </p>
                ) : (
                    <p className={style.dropzoneP}>
                        Drag 'n' drop some files here, or click to select files
                    </p>
                )}
            </div>
            <List  style={{width:'100%'}}>
                {data?.files?.map((file, index) => {
                    return (
                        <ListItem key={index} onClick={() => onDeleteFile(index)}>
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
            <SubmitButton onClick={onClickButton}>Next</SubmitButton>
        </MainContainer>
    );
};
