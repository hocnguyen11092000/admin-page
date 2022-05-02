import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import SubItem from "../sub-item/SubItem";
import styles from "./listitem.module.css";

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
      icon: <LocalMallOutlinedIcon></LocalMallOutlinedIcon>,
      title: "đơn hàng",
      subItem: false,
      link: "/list-order",
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
