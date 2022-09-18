import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "black",
  },
}));

let options = {
  width: "200px",
  border: true,
  borderColor: "#ffffff",
  centerColor: "#459cff",
  centerBorderColor: "#ffffff",
  handColors: {
    second: "#d81c7a",
    minute: "#ffffff",
    hour: "#ffffff",
  },
};

export default function Contact() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid align="center" item xs={12}>
          <h1>FinAyna - Smart Mirror</h1>
        </Grid>
        <Grid align="left" item xs={6}></Grid>
        <Grid align="center" item xs={6}>
          <Typography variant="h3">
            Your portfolio has gone up today by 5%
          </Typography>
        </Grid>
        <Grid align="center" item xs={12}>
          <h1>Contact Page</h1>
        </Grid>
        <Grid align="center" item xs={12}>
          <h3>Finayna - Smart Mirror Home</h3>
          <Typography variant="h3">H1.Heading</Typography>
        </Grid>
      </Grid>
    </div>
  );
}
