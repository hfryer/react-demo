import React from "react";
import {Container, createStyles, Grid, makeStyles, Paper, Theme} from "@material-ui/core";
import Counter from "./counter";
import BankHolidays from "./bank-holidays";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            padding: theme.spacing(2),
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    }),
);

export default function Home() {
    const classes = useStyles();
    return (
        <Container className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Counter className={classes.paper}/>
                </Grid>
                <Grid item xs={6}>
                    <BankHolidays className={classes.paper}/>
                </Grid>
            </Grid>
        </Container>
    )
}