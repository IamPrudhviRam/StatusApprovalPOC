import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { LinearProgress } from "@material-ui/core";
import { test } from "./demo.css";
// import { green } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  paper: {
    height: 120,
    width: 120
  },
  typography: {
    fontFamily: ["Roboto"]
  }
}));

export default function StatusApproval() {
  const classes = useStyles();
  // const accent = green[500]; // #E040FB
  const obj = [
    { id: 1, number: 6, color: "primary", name: "Published" },
    { id: 2, number: 12, color: "secondary", name: "For Approval" },
    { id: 3, number: 7, color: "primary", name: "Approved" },
    { id: 4, number: 2, color: "secondary", name: "Rejected" }
  ];

  return (
    <Grid container className={classes.typography} component="div" spacing={0}>
      <Grid item xs={12}>
        <Grid container justify="space-between" spacing={0}>
          {obj.map(value => (
            <Grid key={value.id} item>
              <Paper className={classes.paper}>
                <h1 align="center">{value.number}</h1>
                <p align="center">{value.name}</p>
                <br />
                <LinearProgress
                  className={test}
                  align="center"
                  variant="determinate"
                  value={Math.random() * 100} //+Math.random() * 100
                  color={value.color}
                />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
