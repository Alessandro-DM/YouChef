import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { useChefStyles } from "../theme";
import { Card, Box, CardMedia, CardContent, CardHeader, CardActions, Typography, IconButton, Tooltip, Button } from "@material-ui/core";

const Home = () => {
  const classes = useChefStyles();
  const imageURL = "https://media-cldnry.s-nbcnews.com/image/upload/t_focal-758x379,f_auto,q_auto:best/rockcms/2022-03/plant-based-food-mc-220323-02-273c7b.jpg";
  return (
    <div>
      <Navbar></Navbar>
      <main>
        {/* <h1>Welcome to YouChef!</h1>
        <h3>Hire your perfect Chef!</h3> */}
      <Card elevation={3} style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", height: "90%", background: "#D7A98C" }}>
      <CardHeader title={
      <Typography className={classes.h3}>
        <h3>Welcome to YouChef! Hire your perfect Chef!</h3>
      </Typography>} align="center" />
      <CardMedia image={imageURL} className={classes.image} />
      </Card>
      {/* <div>
        <img src="https://media-cldnry.s-nbcnews.com/image/upload/t_focal-758x379,f_auto,q_auto:best/rockcms/2022-03/plant-based-food-mc-220323-02-273c7b.jpg"/> */}
        <Link to="/chefs">
          <Button variant="contained" color="primary">
            Start
          </Button> 
        </Link>
      {/* </div> */}
      </main>
    </div>
  );
};

export default Home;
