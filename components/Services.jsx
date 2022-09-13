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
    <Container sx={{ marginTop: "112px" }}>
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

      <Box className="d-lg-flex" sx={{ marginTop: "28px" }}>
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
    </Container>
  );
}

export default Services;
