import React, { useState } from "react";
import PropTypes from "prop-types";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import SubItem from "../sub-item/SubItem";
import styles from "./listitem.module.css";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Link } from "react-router-dom";

ListItem.propTypes = {};

function ListItem(props) {
  const [show, setShow] = useState({
    index: undefined,
    show: false,
  });

  const sidebarList = [
    {
      icon: <GridViewOutlinedIcon></GridViewOutlinedIcon>,
      title: "bảng điều kiển",
      subItem: false,
      link: "/",
    },
    {
      icon: <ShoppingBagOutlinedIcon></ShoppingBagOutlinedIcon>,
      title: "sản phẩm",
      subItem: {
        add: "thêm sản phẩm",
        list: "danh sách sản phẩm",
        add_link: "/add-edit-product",
        list_link: "/list-product",
      },
    },
    {
      icon: <CategoryOutlinedIcon></CategoryOutlinedIcon>,
      title: "danh mục",
      subItem: {
        add: "thêm danh mục",
        list: "danh sách danh mục",
        add_link: "/add-edit-cat",
        list_link: "/list-cat",
      },
    },
    {
      icon: <AccountCircleOutlinedIcon></AccountCircleOutlinedIcon>,
      title: "người dùng",
      subItem: false,
      link: "/list-user",
    },
    {
      icon: <LocationOnOutlinedIcon></LocationOnOutlinedIcon>,
      title: "địa chỉ",
      subItem: false,
      link: "/",
    },
    {
      icon: <LocalMallOutlinedIcon></LocalMallOutlinedIcon>,
      title: "đơn hàng",
      subItem: false,
      link: "/",
    },
  ];

  const handleSetShow = (index) => {
    if (index === show.index) {
      setShow({ index: undefined, show: false });
    } else {
      setShow({ index, show: true });
    }
  };

  const handleClose = () => {
    setShow({ index: undefined, show: false });
  };

  return (
    <ul className={styles.sidebarList}>
      {sidebarList.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <li className={styles.item} onClick={() => handleSetShow(index)}>
              <span>{item.icon}</span>
              <span>
                {!item.subItem ? (
                  <Link to={item.link}>{item.title}</Link>
                ) : (
                  item.title
                )}
              </span>
            </li>
            {item.subItem && (
              <SubItem
                onShow={index === show.index ? true : false}
                onClose={handleClose}
                item={item.subItem}
              ></SubItem>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
}

export default ListItem;
