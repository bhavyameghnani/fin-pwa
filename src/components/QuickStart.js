import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 0,
    backgroundColor: "black",
  },
}));

export default function QuickStart() {
  const classes = useStyles();

  // eslint-disable-next-line
  const [dateTime, setDateTime] = useState(new Date().toLocaleString());

  return (
    // <div className={classes.root}>
      <Container maxWidth="lg" style={{ backgroundColor: "black" }}>
        <Grid container spacing={3}>
          <Grid align="center" item xs={12}></Grid>
          <Grid container spacing={1}>
            <Grid align="left" item xs={6}>
              Monday, September 19, 2022
            </Grid>
            <Grid item xs={6}></Grid>
            <Grid align="left" item xs={6}>
              15:30
            </Grid>
            <Grid item xs={6}></Grid>
            <Grid align="left" item xs={6}>
              Heavy Monsoon Today
            </Grid>
            <Grid item xs={6}></Grid>
          </Grid>

          <Grid container spacing={4}>
            <Grid align="center" item xs={12}>
              <Carousel
                autoPlay={true}
                autoFocus={true}
                infiniteLoop={true}
                interval={7000}
                showArrows={false}
                showIndicators={false}
                showStatus={false}
                swipeable={false}
                //   animationHandler={"fade"}
              >
                <h1>Good Morning, Your portfolio has gone up today by 5%</h1>
                <h1>Today is your day, Enjoy your day!</h1>
                <h1>Wealth is the ability to fully experience life</h1>
              </Carousel>
            </Grid>
            <Grid align="center" item xs={12}>
              <h1>Trending Research </h1>
            </Grid>
          </Grid>
          <Grid align="center" item xs={12}>
            research articles, headlines, research material for quick read
            headlines research articles, headlines, research material for quick
            read headlines
          </Grid>

          <Grid container spacing={4}>
            <Grid align="center" item xs={12}>
              <h1>Latest News Articles</h1>
            </Grid>
          </Grid>
          <Grid align="center" item xs={12}>
            research articles, headlines, research material for quick read
            headlines research articles, headlines, research material for quick
            read headlines
          </Grid>

          <Grid align="center" item xs={12}>
            <i>Quick Start</i>
          </Grid>
        </Grid>
      </Container>
    // </div>
  );
}
