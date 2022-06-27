import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { useSelector } from "react-redux";
import { useState } from "react";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function SideSwipeBar({ setFilter }) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const chefs = useSelector((state) => state.allChefs);

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const filterFoodType = (chefs) => {
    let arr = [];
    for (let i = 0; i < chefs.length; i++) {
      let chef = chefs[i];
      if (!arr.includes(chef["foodType"])) {
        arr.push(chef["foodType"]);
      }
    }
    arr.push("all");
    return arr;
  };

  let filteredChefs = filterFoodType(chefs);

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {filteredChefs.map((foodType) => (
          <ListItem button key={foodType}>
            <ListItemText primary={foodType.toUpperCase()} onClick={() => setFilter(foodType)} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      {
        <React.Fragment>
          <Button variant="contained" color="primary" onClick={toggleDrawer("right", true)}>
            Pick your type of food!
          </Button>
          <SwipeableDrawer anchor={"right"} open={state["right"]} onClose={toggleDrawer("right", false)} onOpen={toggleDrawer("right", true)}>
            {list("right")}
          </SwipeableDrawer>
        </React.Fragment>
      }
    </div>
  );
}
