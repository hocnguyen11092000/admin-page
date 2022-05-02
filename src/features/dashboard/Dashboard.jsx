import React from "react";
import PropTypes from "prop-types";
import ListCard from "./components/list-card/ListCard";
import { Grid } from "@mui/material";
import Chart from "./components/chart/Chart";
import ListOrder from "../order/pages/list-order/ListOrder";

Dashboard.propTypes = {};

function Dashboard(props) {
  return (
    <div className="dashboard">
      <Grid container spacing={3}>
        <Grid item lg={7} md={7} sm={12} xs={12}>
          <ListCard></ListCard>
        </Grid>

        <Grid item lg={5} md={5} sm={12} xs={12}>
          <Chart></Chart>
        </Grid>
      </Grid>

      <ListOrder status="Đang chờ xác nhận"></ListOrder>
    </div>
  );
}

export default Dashboard;
