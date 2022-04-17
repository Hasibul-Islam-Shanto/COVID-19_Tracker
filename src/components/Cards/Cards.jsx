import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import CountUp from "react-countup";

const Cards = ({ info: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...";
  }
  return (
    <>
      <Grid
        container
        spacing={4}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "1rem",
        }}
      >
        <Grid
          item
          component={Card}
          xs={2}
          sx={{
            borderBottom: "10px solid rgba(0, 0, 255, 0.5)",
          }}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.75}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" component="p">
              Numbers of people infected in COVID-19.
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={2}
          sx={{
            marginLeft: "1rem",
            borderBottom: "10px solid rgba(0, 255, 0, 0.5)",
          }}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp
                start={0}
                end={recovered.value}
                duration={2.75}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" component="p">
              Numbers of people recovered from COVID-19.
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={2}
          sx={{
            marginLeft: "1rem",
            borderBottom: "10px solid rgba(255, 0, 0, 0.5)",
          }}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.75}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" component="p">
              Numbers of people deaths for COVID-19.
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </>
  );
};

export default Cards;
