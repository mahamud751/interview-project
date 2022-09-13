/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Card,
  CardContent,
  Container,
  Typography,
  Grid,
} from "@mui/material";
import React from "react";

function Services() {
  return (
    <Container className="mt-5">
      <Typography
        className="text-center"
        variant="h3"
        style={{ color: "#A991FA" }}
      >
        Our Services
      </Typography>
      <Typography className="text-center" variant="h2">
        Services For Your Health
      </Typography>

      <Box className="d-lg-flex mt-5">
        <Card style={{ marginLeft: 20, marginBottom: 10 }}>
          <CardContent className="d-flex">
            <Box>
              <Typography sx={{ fontSize: 12 }} gutterBottom>
                Cardiology
              </Typography>

              <Typography sx={{ marginY: 1, fontSize: 14 }}>
                Seduahag perspiciati under omnised atused error.
              </Typography>
              <Typography sx={{ fontSize: 16, marginTop: 2 }}>
                Explore Now
              </Typography>
            </Box>
            <img
              src="https://i.ibb.co/kJhcj7y/Vector.png"
              alt=""
              className="img-fluid"
              style={{ width: "20px", height: "20px" }}
            />
          </CardContent>
        </Card>
        <Card style={{ marginLeft: 20, marginBottom: 10 }}>
          <CardContent className="d-flex">
            <Box>
              <Typography sx={{ fontSize: 12 }} gutterBottom>
                Monthly Check Up
              </Typography>

              <Typography sx={{ marginY: 1, fontSize: 14 }}>
                Seduahag perspiciati under omnised atused error.
              </Typography>
              <Typography sx={{ fontSize: 16, marginTop: 2 }}>
                Explore Now
              </Typography>
            </Box>
            <img
              src="https://i.ibb.co/80L7Tm0/Vector-2.png"
              alt=""
              style={{ width: "20px", height: "20px" }}
            />
          </CardContent>
        </Card>
        <Card style={{ marginLeft: 20, marginBottom: 10 }}>
          <CardContent className="d-flex">
            <Box>
              <Typography sx={{ fontSize: 12 }} gutterBottom>
                Dental Care
              </Typography>

              <Typography sx={{ marginY: 1, fontSize: 14 }}>
                Seduahag perspiciati under omnised atused error.
              </Typography>
              <Typography sx={{ fontSize: 16, marginTop: 2 }}>
                Explore Now
              </Typography>
            </Box>
            <img
              src="https://i.ibb.co/0Gjvt4s/Vector-1.png"
              alt=""
              style={{ width: "20px", height: "20px" }}
            />
          </CardContent>
        </Card>
        <Card style={{ marginLeft: 20, marginBottom: 10 }}>
          <CardContent className="d-flex">
            <Box>
              <Typography sx={{ fontSize: 12 }} gutterBottom>
                Opthalmology
              </Typography>

              <Typography sx={{ marginY: 1, fontSize: 14 }}>
                Seduahag perspiciati under omnised atused error.
              </Typography>
              <Typography sx={{ fontSize: 16, marginTop: 2 }}>
                Explore Now
              </Typography>
            </Box>
            <img
              src="https://i.ibb.co/MfrqBtf/Vector-3.png"
              alt=""
              className="img-fluid"
              style={{ width: "20px", height: "20px" }}
            />
          </CardContent>
        </Card>
      </Box>

      <Box className="mt-5 p-3">
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

export default Services;
