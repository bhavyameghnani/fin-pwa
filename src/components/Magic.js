import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Container from "@material-ui/core/Container";
import wave from '../Resources/wave.gif';
import esg from '../Resources/esg.jpg'
import useSound from 'use-sound'
import mySound from '../Resources/wow_who_did_the_magic.mp3' // Your sound file path here

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

export default function Magic() {
  const classes = useStyles();
  const [playSound] = useSound(mySound)

  // eslint-disable-next-line
  const [dateTime, setDateTime] = useState(new Date().toLocaleString());
  var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg" style={{ backgroundColor: "black" }}>
        <Grid container style={{backgroundColor: "black"}}spacing={3}>
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
          <br/> <br/> <br/> <br/> <br/>
              <h3 onClick={playSound()}></h3>
            </Grid>
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
                <h2>Good Morning, Your portfolio has gone up today by 6%</h2>
                <h2>Today is your day, Enjoy your day!</h2>
                <h2> Wealth is the ability to fully experience life</h2>
              </Carousel>
          
              <Grid align="center" item xs={12}>
              <img src={wave} alt="wave" />
            <br/> <br/> <br/> <br/> <br/>
              Trending Research
            </Grid>
          </Grid>
          <Grid align="left" item xs={12}>
          <marquee scrollamount="15" width="100%" direction="left" >
          UK Green Bonds Boost Sustainability Toolkit.       EV Adoption to Grow Exponentially Through 2035, Says Tu Le ESG360 - Green Energy Stocks and Navigating Social Data
            </marquee>
        
            
          </Grid>

          <Grid container spacing={4}>
            <Grid align="center" item xs={12}>
            <br/> <br/> <br/> 
              Latest News Articles
            </Grid>
          </Grid>
          <Grid align="left" item xs={12}>
          <marquee scrollamount="15" width="100%" direction="left" >
          Renewed buzz over India entry in JPMorgan EM bond index. 
Goldman Cuts US Growth Forecast for 2023 After Rate Path Change
ECB Taps Amazon, Four Others to Pitch Digital Euro Prototype
</marquee>
           
          </Grid>

          {/* <Grid align="center" item xs={12}>
          <br/> <br/> <br/> 
            <i>Quick Start</i>
          </Grid> */}
        </Grid>
      </Container>
    </div>
  );
}
