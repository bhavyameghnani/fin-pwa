import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Container from "@material-ui/core/Container";
import wave from "../Resources/wave.jpg";

import AWSUtil from "../Utils/awsUtils";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "black",
    width: "100",
    height: "100",
    overflow: "hidden",
    position: "relative",
  },
}));

function pollySpeak(string) {
  let audioElement = document.getElementById("audio");

  Promise.resolve(AWSUtil.getPollyMP3Url(string))
    .then((url) => {
      audioElement.src = url;
      setTimeout(() => {
        audioElement.play();
      }, 500);
    })
    .catch(() => {
      console.log("Something went wrong with playing the Polly file.");
    });
}

export default function QuickStart() {
  const classes = useStyles();

  // eslint-disable-next-line
  // const [dateTime, setDateTime] = useState(new Date().toLocaleString());

  var today = new Date();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg" style={{ backgroundColor: "black" }}>
        <Grid container style={{ backgroundColor: "black" }} spacing={3}>
          <Grid align="center" item xs={12}></Grid>
          <Grid container spacing={1}>
            <Grid align="left" item xs={6}>
              Wednesday, September 21, 2022
            </Grid>
            <Grid item xs={6}></Grid>
            <Grid align="left" item xs={6}>
              {time}
            </Grid>
            <Grid item xs={6}></Grid>
            <Grid align="left" item xs={6}>
              Heavy Monsoon Today
            </Grid>
            <Grid item xs={6}></Grid>
          </Grid>

          <Grid container spacing={4}>
            <Grid align="center" item xs={12}>
              <br /> <br /> <br /> <br /> <br />
              <h2
                onClick={() => {
                  pollySpeak(
                    "UK Green Bonds Boost Sustainability Toolkit EV Adoption to Grow Exponentially Through 2035"
                  );
                }}
              >
                {" "}
                Welcome to Finayna World{" "}
              </h2>
              <img src={wave} alt="wave" />
              <audio id="audio"></audio>
            </Grid>
            <Grid align="center" item xs={12}>
              <br /> <br /> <br /> <br /> <br />
              Trending Research
            </Grid>
          </Grid>
          <Grid align="left" item xs={12}>
            UK Green Bonds Boost Sustainability Toolkit EV Adoption to Grow
            Exponentially Through 2035, Says Tu Le ESG360 - Green Energy Stocks
            and Navigating Social Data
          </Grid>

          <Grid container spacing={4}>
            <Grid align="center" item xs={12}>
              <br /> <br /> <br />
              Latest News Articles
            </Grid>
          </Grid>
          <Grid align="left" item xs={12}>
            Renewed buzz over India entry in JPMorgan EM bond index. Goldman
            Cuts US Growth Forecast for 2023 After Rate Path Change ECB Taps
            Amazon, Four Others to Pitch Digital Euro Prototype
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

{
  /* <Carousel
      autoPlay={true}
      autoFocus={true}
      infiniteLoop={true}
      interval={7000}
      showArrows={false}
      showIndicators={false}
      showStatus={false}
      swipeable={false}
    ></Carousel> */
}
