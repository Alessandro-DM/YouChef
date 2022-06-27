import React, { useEffect, useState } from "react";
import { fetchChef } from "../store/singleChef";
import { addToHireCart, editHireCart } from "../store/hireCart";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useChefStyles } from "../theme";
import { Card, Box, CardMedia, CardContent, CardHeader, CardActions, Typography, IconButton, Tooltip } from "@material-ui/core";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

function SingleChefCard({ chef, cartItem }) {
  // const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleAddToHireCart = () => {
    console.log(chef);
    dispatch(addToHireCart(chef));
    // history.push("/cart");
  };

  const classes = useChefStyles();
  const { firstName, lastName, username, pricePerHour, email } = chef;

  return (
    <Card elevation={3} style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", height: "90%", background: "linear-gradient(to right top, pink, white, orange)" }}>
      <CardHeader title={<Typography className={classes.h4}>{name}</Typography>} align="center" />
      {/* <CardMedia image={imageURL} title={name} className={classes.image} /> */}
      <CardContent>
        <Typography className={classes.p}>{firstName}</Typography>
        <Typography className={classes.p}>{lastName}</Typography>
        <Typography className={classes.p}>{username}</Typography>
        <Typography className={classes.p}>{pricePerHour}</Typography>
        <Typography className={classes.p}>${email}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        {cartItem ? null : (
          <Tooltip title="Add to hireCart">
            <IconButton aria-label="Add to hireCart" onClick={handleAddToHireCart}>
              <ShoppingCartOutlinedIcon />
            </IconButton>
          </Tooltip>
        )}
      </CardActions>
    </Card>
  );
}

export default SingleChefCard;
