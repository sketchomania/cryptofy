import React from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";
import Carousel from "./Carousel";

const usesStyles = makeStyles(() => ({
  banner: {
    backgroundImage: "url(./)",
  },
  bannerContent: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    padding: 25,
    justifyContent: "space-around",
  },
  tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
}));
const Banner = () => {
  const classes = usesStyles();
  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
            variant="h2"
            style={{ fontWeight: "bold", marginBottom: 15, fontFamily: "Lato" }}
          >
            Cryptofy
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "darkgray",
              textTransform: "capitalize",
              fontFamily: "Lato",
            }}
          >
            Get all the Info regarding your favorite Crypto Currnecy
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  );
};

export default Banner;
