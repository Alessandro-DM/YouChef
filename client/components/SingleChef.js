import React, { useEffect, useState } from "react";
import { fetchChef } from "../store/singleChef";
import { addToHireCart } from "../store/hireCart";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button, Typography, Card, CardMedia, CardContent, CardHeader, CardActions, Tooltip, IconButton, CssBaseline, Container } from "@material-ui/core";
import { useChefStyles } from "../theme";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

function SingleChef(props) {
  const history = useHistory();
  const chef = useSelector((state) => state.singleChef);
  const dispatch = useDispatch();

  useEffect(() => {
    const { id } = props.match.params;
    dispatch(fetchChef(id));
  }, []);

  const handleAddToHireCart = () => {
    dispatch(addToHireCart(chef));
    history.push("/chefs");
  };

  const classes = useChefStyles();
  const { firstName, lastName, foodType, address, city, state, pricePerHour, ratings, email } = chef;
  return (
    <Container maxWidth="lg">
      <Card xs={12} md={6} lg={3} elevation={3} style={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly", height: "auto", background: "#D7A98C" }}>
        <CardHeader align="center" title={<Typography className={classes.h4}>{firstName + ' ' + lastName}</Typography>} />
        {/* <CardMedia component="img" alt="img of cookie" image={imageURL} title={name} className={classes.media} /> */}
        <CardContent>
        <Typography className={classes.p}>FoodType: {foodType}</Typography>
        <Typography className={classes.p}>Price/Hour: ${pricePerHour}</Typography>
        <Typography className={classes.p}>Ratings (0 to 5): {ratings}</Typography>
        <Typography className={classes.p}>Address: {address}</Typography>
        <Typography className={classes.p}>City: {city}</Typography>
        <Typography className={classes.p}>State: {state}</Typography>
        <Typography className={classes.p}>Email: {email}</Typography>
      </CardContent>
        <CardActions>
          <Tooltip title="Add to cart">
            <IconButton aria-label="Add to cart" onClick={handleAddToHireCart}>
              <ShoppingCartOutlinedIcon />
            </IconButton>
          </Tooltip>
        </CardActions>
      </Card>
    </Container>
  );
}

export default SingleChef;