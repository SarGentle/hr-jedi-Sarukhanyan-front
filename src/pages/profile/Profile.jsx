import React, {useContext, useEffect, useState} from "react";
import ProfileView from "./ProfileView";
import {AppContext} from "../../AppContext";
import {findUser, loadAvatar, updateEmail, uploadAvatar} from "../../api/employeeApi";
import {useSnackbar} from "../../utils/snackbar";

const onSave = (history, location, currentUser, setCurrentUser, showError) => (values) => {
  return updateEmail(history, values.email).then(() => {
      currentUser.email = values.email;
      setCurrentUser(currentUser);
    })
    .catch(() => showError("Произошла ошибка обновлении почтового ящика"));
};
const onChangeFile = (history, location, showError) => (event) =>{
  const formData = new FormData();
  formData.append("file", event.target.files[0]);
  return uploadAvatar(history, formData)
    .then().catch(() => showError("Произошла ошибка загрузки аватарки"));
};

const Profile = (props) => {
  const [context] = useContext(AppContext);
  const {history, location} = props;
  const tokenUser = context.currentUser;
  const [currentUser, setCurrentUser] = useState();
  const [avatar, setAvatar] = useState();
  const {showError} = useSnackbar();
  const save = onSave(history, location, currentUser, setCurrentUser, showError);
  const changeFile = onChangeFile(history, location, showError);

  useEffect(() => {
    findUser(history, tokenUser.username).then(user => setCurrentUser(user))
      .catch(() => showError("Произошла ошибка при загрузке информации о пользователе"));
  }, [tokenUser, history, showError]);

  useEffect(() => {
    loadAvatar(history).then(avatar => setAvatar(avatar))
      .catch(() => showError("Произошла ошибка при скачивании аватара"));
  }, [history, showError]);

  return (
    <ProfileView
      currentUser={currentUser}
      onSave={save}
      onChangeFile={changeFile}
      avatar={avatar}
    />
  );
};

export default Profile;
