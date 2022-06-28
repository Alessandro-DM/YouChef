import React, { useEffect, useState } from "react";
import { fetchChef } from "../store/singleChef";
import { addToHireCart, editHireCart } from "../store/hireCart";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { useChefStyles } from "../theme";
import { Card, Box, CardMedia, CardContent, CardHeader, CardActions, Typography, IconButton, Tooltip, Button } from "@material-ui/core";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

function SingleChefCard({ chef, cartItem }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleAddToHireCart = () => {
    console.log(chef);
    dispatch(addToHireCart(chef));
    // history.push("/cart");
  };

  const classes = useChefStyles();
  const { firstName, lastName, foodType, address, city, state, pricePerHour, ratings, email } = chef;
  return (
    <Card elevation={3} style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", height: "60%", background: "#D7A98C" }}>
      <Link to={`/chefs/${chef.id}`}>
      <Button className={classes.p}>
      <CardHeader align="center" title={<Typography className={classes.h4}>{firstName + ' ' + lastName}</Typography>} />
      </Button> 
      </Link> 
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
      {/* <CardActions disableSpacing>
        {cartItem ? null : (
          <Tooltip title="Add to hireCart">
            <IconButton aria-label="Add to hireCart" onClick={handleAddToHireCart}>
              <ShoppingCartOutlinedIcon />
            </IconButton>
          </Tooltip>
        )}
      </CardActions> */}
    </Card>
  );
}

export default SingleChefCard;
