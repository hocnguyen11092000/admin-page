import React, { useState } from "react";
import PropTypes from "prop-types";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
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
      icon: <FolderOpenIcon></FolderOpenIcon>,
      title: "sản phẩm",
      subItem: true,
    },
    {
      icon: <FolderOpenIcon></FolderOpenIcon>,
      title: "người dùng",
      subItem: true,
    },
    {
      icon: <FolderOpenIcon></FolderOpenIcon>,
      title: "địa chỉ",
      subItem: false,
    },
    {
      icon: <FolderOpenIcon></FolderOpenIcon>,
      title: "đơn hàng",
      subItem: false,
    },
  ];

  const handleSetShow = (index) => {
    if (index === show.index) {
      setShow({ index: undefined, show: false });
    } else {
      setShow({ index, show: true });
    }
  };

  return (
    <ul className={styles.sidebarList}>
      {sidebarList.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <li className={styles.item} onClick={() => handleSetShow(index)}>
              <span>{item.icon}</span>
              <span>{item.title}</span>
            </li>
            {item.subItem && (
              <SubItem onShow={index === show.index ? true : false}></SubItem>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
}

export default ListItem;
