import { Container, makeStyles } from "@material-ui/core";
import React from "react";

const useStyleContainer = makeStyles((them) => ({
    root: {
        marginTop: them.spacing(5),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",

    },
}));

export const MainContainer = ({ children, ...props }) => {
    const containerStyle = useStyleContainer();
    return (
        <Container maxWidth="xs" className={containerStyle.root} {...props}>
            {children}
        </Container>
    );
};
