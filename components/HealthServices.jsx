/* eslint-disable react/no-unescaped-entities */
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

function HealthServices() {
  return (
    <Container sx={{ marginTop: "56px" }}>
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Typography sx={{ fontSize: 16, color: "#6C39FE" }}>
              16+ Years Experiences
            </Typography>
            <Typography sx={{ fontSize: 32 }}>
              We Are Always ensure Best Medical Treatment For Your Health
            </Typography>
            <Typography sx={{ fontSize: 14 }}>
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look lik
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <img
              src="https://i.ibb.co/q9FQFMV/Group-12.png"
              alt=""
              style={{ marginLeft: 100 }}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default HealthServices;
