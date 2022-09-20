import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Container from "@material-ui/core/Container";
import wave from '../Resources/wave.gif';
import esg from '../Resources/esg.jpg'
import useSound from 'use-sound'
import mySound from '../Resources/podcast.mp3' // Your sound file path here

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "black",
    width: "100",
    height: "100",
    overflow: "hidden",
    position: "relative"
    
  },
  
}));

export default function Podcast() {
  const classes = useStyles();
  const [playSound] = useSound(mySound)

  // eslint-disable-next-line
  const [dateTime, setDateTime] = useState(new Date().toLocaleString());


  return (
    <div className={classes.root}>
      <Container maxWidth="lg" style={{ backgroundColor: "black" }}>
        <Grid container style={{backgroundColor: "black"}}spacing={3}>
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
          <br/> <br/> <br/> <br/> <br/>
              <h3 onClick={playSound()}>ESG360 - Green Energy Stocks and Navigating Social Data</h3>
            </Grid>
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
                
              >
                <h4>Alternative energy shares have been resilient in the face of a stock market downturn</h4>
                <h4>Solar companies have performed better than some wind firms that aren’t yet very profitable</h4>
                <h4>We also discuss the difficulties of navigating contradictory disclosure rules in South Korea.</h4>
              </Carousel>

             

              <img src={wave} alt="wave" />
            </Grid>
            <Grid align="center" item xs={12}>
             <br/> <br/>
              Summary
            </Grid>
          </Grid>
          <Grid align="center" item xs={12}>
          In this episode of ESG360, we take a look at the resilience of green energy stocks amid a broad-based stock market downturn in the first half of the year. A further interesting point is that solar stocks have performed better than wind as some of these companies are not yet profitable highlighting the challenge investors face in their efforts to advance the green transition. 
          </Grid>
          <Grid align="center" item xs={12}>
          <img src={esg} alt="esg" width="500px"/>
          <br/> <br/> <br/> 
            <i>Podcast</i>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
