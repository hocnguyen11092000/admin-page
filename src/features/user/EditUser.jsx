import React from "react";
import PropTypes from "prop-types";
import userApi from "../../api/userApi";
import EditUserForm from "./components/edit-user/EditUserForm";
import { useSnackbar } from "notistack";
import { useDispatch } from "react-redux";
import { updateUser } from "../auth/userSlice";
import { useNavigate } from "react-router-dom";

EditUser.propTypes = {};

function EditUser(props) {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      await userApi.updateProfile(values);

      dispatch(updateUser(values));
      enqueueSnackbar("Chỉnh sửa thông tin cá nhân thành công", {
        variant: "success",
        autoHideDuration: 2000,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
      enqueueSnackbar("Chỉnh sửa thông tin cá nhân thất bại", {
        variant: "error",
        autoHideDuration: 2000,
      });
    }
  };

  return (
    <div>
      <EditUserForm onSubmit={handleSubmit}></EditUserForm>
    </div>
  );
}

export default EditUser;
