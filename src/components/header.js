import React from "react";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((them) => ({
    root: {
        color: "deeppink",
        margin: them.spacing(2, 0, 3),
        textAlign: "center",
        fontFamily: "Permanent Marker",
        textShadow: '1px 1px darkmagenta'
    },
}));

export const Header = () => {
    const style = useStyle();
    return (
        <Typography className={style.root} component="h1" variant="h2">
            The Ultimate Form Challenge
        </Typography>
    );
};
