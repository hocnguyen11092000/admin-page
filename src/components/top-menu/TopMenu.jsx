import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./topmenu.module.css";

TopMenu.propTypes = {};

function TopMenu(props) {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.currentUser);

  return (
    <>
      {user && (
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
      )}
    </>
  );
}

export default TopMenu;
