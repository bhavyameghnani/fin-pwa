import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

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

export default function Welcome() {
  const classes = useStyles();

  // eslint-disable-next-line
  const [dateTime, setDateTime] = useState(new Date().toLocaleString());

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {" "}
        <Grid align="center" item xs={12}>
          <h1>FinAyna - Smart Mirror</h1>
        </Grid>
        <Grid align="left" item xs={6}>
          <AnalogClock {...options} />
          {dateTime}
        </Grid>
        <Grid align="center" item xs={6}>
          <h1>Your portfolio has gone up today by 5%</h1>
        </Grid>
        <Grid align="center" item xs={12}>
          <h1>Home Page</h1>
        </Grid>
        <Grid align="center" item xs={12}>
          <h3>Finayna - Smart Mirror Home</h3>
        </Grid>
      </Grid>
    </div>
  );
}
