import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styles from "./topmenu.module.css";
import Button from "../button/Button";

TopMenu.propTypes = {};

function TopMenu(props) {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.currentUser);

  return (
    <>
      {user.name ? (
        <div className={styles.top_menu}>
          <div className={styles.top_menu_wrapper}>
            <span className={styles.avatar}>
              <img
                src={user.avatar}
                alt={user.name}
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/edit-user")}
              />
            </span>
            <span
              className={styles.name}
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/edit-user")}
            >
              {user.name}
            </span>
          </div>
        </div>
      ) : (
        <div className={styles.top_menu}>
          <Link to="/login">
            <Button type="button" name="Đăng nhập" bg="var(--blue)"></Button>
          </Link>
        </div>
      )}
    </>
  );
}

export default TopMenu;
