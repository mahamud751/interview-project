import { Container, Grid, Typography } from "@mui/material";
import React from "react";

function HealthServices() {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          <Typography sx={{ fontSize: 12, color: "#6C39FE" }}>
            16+ Years Experiences{" "}
          </Typography>
        </Grid>
        <Grid item xs={12} md={5}></Grid>
      </Grid>
    </Container>
  );
}

export default HealthServices;
