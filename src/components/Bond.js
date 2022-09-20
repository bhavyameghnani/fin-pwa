import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Container from "@material-ui/core/Container";
import wave from '../Resources/wave.gif';
import bond from '../Resources/bond.png'

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

export default function Bonds() {
  const classes = useStyles();

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
              <h3>UK Green Bonds Boost Sustainability Toolkit</h3>
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
                
                <h4>The UK sold green retail bonds, offering a three-year maturity, fixed rate of return and a 100% capital guarantee</h4>
                <h4>Proceeds will be used for projects including wind farms and accelerating the transition to electric vehicles</h4>
                <h4>Governments need to highlight climate risk mitigation measures if green retail bonds are to gain momentum</h4>
              </Carousel>

             

              <img src={wave} alt="wave" />
            </Grid>
            <Grid align="center" item xs={12}>
             <br/> <br/>
              Summary
            </Grid>
          </Grid>
          <Grid align="center" item xs={12}>
          The Green Savings Bonds – like the UK’s green bonds targeting institutional investors – were issued under the Green Finance Framework, published in June 2021. 
          </Grid>
          <Grid align="center" item xs={12}>
          <img src={bond} alt="esg" width="500px"/>
          <br/> <br/> <br/> 
            <i>Research Reports</i>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
