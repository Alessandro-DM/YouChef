

import React, { useEffect } from "react";
import { fetchChefs } from "../store/allChefs";
import { addToHireCart } from "../store/hireCart";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Box, Button, Container, Grid } from "@material-ui/core";
import { useChefStyles } from "../theme";
import SingleChefCard from "./SingleChefCard";
import SideSwipeBar from "./SideSwipeBar";
import { useState } from "react";

function AllChefs() {
  const chefs = useSelector((state) => state.allChefs);
  const history = useHistory();

  const [filter, setFilter] = useState("all");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchChefs());
  }, []);

  return (
    <>
      <SideSwipeBar setFilter={setFilter} />
      <Container maxWidth="lg" sx={{ marginY: 12 }}>
        <Grid container spacing={5} style={{ justifyContent: "space-around" }}>
          {filter !== "all"
            ? chefs
                .filter((chef) => filter === chef.foodType)
                .map((chef) => {
                  return (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={chef.id}>
                      <SingleChefCard chef={chef} />
                      <Box style={{ padding: 1 }} />
                      {/* <Button variant="contained" color="primary" href={`/chefs/${chef.id}`}>
                        Learn more about this Chef
                      </Button> */}
                    </Grid>
                  );
                })
            : chefs.map((chef) => {
                return (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={chef.id}>
                    <SingleChefCard chef={chef} />
                    <Box style={{ padding: 1 }} />
                    {/* <Button variant="contained" color="primary" href={`/chefs/${chef.id}`}>
                      Learn more about this Chef
                    </Button> */}
                  </Grid>
                );
              })}
        </Grid>
      </Container>
    </>
  );
}

export default AllChefs;
