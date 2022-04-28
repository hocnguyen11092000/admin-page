import React from "react";
import PropTypes from "prop-types";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Card from "../card/Card";
import { Grid } from "@mui/material";

ListCard.propTypes = {};

function ListCard(props) {
  const CardList = [
    {
      name: "Đang xử lý",
      count: "1,355",
      icon: <ShoppingBagOutlinedIcon></ShoppingBagOutlinedIcon>,
    },
    {
      name: "Đã giao",
      count: "1,566",
      icon: <ShoppingBagOutlinedIcon></ShoppingBagOutlinedIcon>,
    },
    {
      name: "Đã hủy",
      count: "102",
      icon: <ShoppingBagOutlinedIcon></ShoppingBagOutlinedIcon>,
    },
    {
      name: "Tổng doanh thu",
      count: 1200,
      icon: <ShoppingBagOutlinedIcon></ShoppingBagOutlinedIcon>,
    },
  ];
  return (
    <>
      <Grid container spacing={3}>
        {CardList.map((item, index) => {
          return (
            <Grid item lg={6} md={6} sm={12} xs={12} key={index}>
              <Card item={item}></Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

export default ListCard;
