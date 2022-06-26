// import React from "react";
// import clsx from "clsx";
// import { makeStyles } from "@material-ui/core/styles";
// import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
// import Button from "@material-ui/core/Button";
// import List from "@material-ui/core/List";
// import Divider from "@material-ui/core/Divider";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";
// import { useSelector } from "react-redux";
// import { useState } from "react";

// const useStyles = makeStyles({
//   list: {
//     width: 250,
//   },
//   fullList: {
//     width: "auto",
//   },
// });

// export default function SideSwipeBar({ setFilter }) {
//   const classes = useStyles();
//   const [state, setState] = React.useState({
//     top: false,
//     left: false,
//     bottom: false,
//     right: false,
//   });

//   const products = useSelector((state) => state.allProducts);

//   const toggleDrawer = (anchor, open) => (event) => {
//     if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
//       return;
//     }
//     setState({ ...state, [anchor]: open });
//   };

//   const filterCategory = (products) => {
//     let arr = [];
//     for (let i = 0; i < products.length; i++) {
//       let product = products[i];
//       if (!arr.includes(product["category"])) {
//         arr.push(product["category"]);
//       }
//     }
//     arr.push("all");
//     return arr;
//   };

//   let filteredProducts = filterCategory(products);

//   const list = (anchor) => (
//     <div
//       className={clsx(classes.list, {
//         [classes.fullList]: anchor === "top" || anchor === "bottom",
//       })}
//       role="presentation"
//       onClick={toggleDrawer(anchor, false)}
//       onKeyDown={toggleDrawer(anchor, false)}
//     >
//       <List>
//         {filteredProducts.map((category) => (
//           <ListItem button key={category}>
//             <ListItemText primary={category} onClick={() => setFilter(category)} />
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   );

//   return (
//     <div>
//       {
//         <React.Fragment>
//           <Button variant="contained" color="primary" onClick={toggleDrawer("left", true)}>
//             Cookies!
//           </Button>
//           <SwipeableDrawer anchor={"left"} open={state["left"]} onClose={toggleDrawer("left", false)} onOpen={toggleDrawer("left", true)}>
//             {list("left")}
//           </SwipeableDrawer>
//         </React.Fragment>
//       }
//     </div>
//   );
// }
