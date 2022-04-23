import React from "react";
import PropTypes from "prop-types";
import styles from "./subitem.module.css";
import { Link } from "react-router-dom";

SubItem.propTypes = {};

function SubItem(props) {
  const { onShow } = props;

  return (
    <>
      <div
        className={`${styles.subItem}`}
        style={
          onShow
            ? {
                height: "auto",
                transform: "translateY(0)",
                display: "block",
              }
            : {}
        }
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span className={styles.subItem__item}>
            <Link to="/add-product">Thêm sản phẩm</Link>
          </span>
          <span className={styles.subItem__item}>
            <Link to="/">Danh sách sản phẩm</Link>
          </span>
        </div>
      </div>
    </>
  );
}

export default SubItem;
