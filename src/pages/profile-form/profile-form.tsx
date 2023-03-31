import React, { useState, useEffect, FC } from "react";
import { useSelector, useDispatch } from "../../services/hooks";
import {
  START_CHANGING,
  STOP_CHANGING,
  patchUser,
} from "../../services/actions/user";
import { getUserFromStore } from "../../utils";
import styles from "./profile-form.module.css";
import {
  Input,
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

const ProfileForm: FC = () => {
  const dispatch = useDispatch();
  const { user, onChange } = useSelector(getUserFromStore);
  const [userState, setUserState] = useState({name:"", email:"", password:""});

  const changeName = (e:React.ChangeEvent<HTMLInputElement>) => {
    if (!onChange) {
      dispatch({ type: START_CHANGING });
    }
    setUserState({ ...userState, name: e.target.value });
  };

  const changeLogin = (e:React.ChangeEvent<HTMLInputElement>) => {
    if (!onChange) {
      dispatch({ type: START_CHANGING });
    }
    setUserState({ ...userState, email: e.target.value });
  };

  const changePassword = (e:React.ChangeEvent<HTMLInputElement>) => {
    if (!onChange) {
      dispatch({ type: START_CHANGING });
    }
    setUserState({ ...userState, password: e.target.value });
  };

  const stopChanging = () => {
    setUserState({ ...user, password: "" });
    dispatch({ type: STOP_CHANGING });
  };

  const onSave: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch(patchUser(userState, true));
  };

  useEffect(() => {
    setUserState({ ...user, password: "" });
  }, [user]);

  return (
    <form className={`${styles.inputs} pt-20`} onSubmit={onSave}>
      {userState && (
        <>
          <Input
            placeholder="Имя"
            icon="EditIcon"
            value={userState.name}
            onChange={changeName}
          />
          <EmailInput
            isIcon={true}
            value={userState.email}
            onChange={changeLogin}
          />
          <PasswordInput
            placeholder="Пароль"
            icon="EditIcon"
            value={userState.password}
            onChange={changePassword}
          />
        </>
      )}
      {onChange && (
        <div className={styles.formButtons}>
          <Button
            onClick={stopChanging}
            htmlType="button"
            type="secondary"
            size="medium"
          >
            Отмена
          </Button>
          <Button htmlType="submit" type="primary" size="medium">
            Сохранить
          </Button>
        </div>
      )}
    </form>
  );
}

export default ProfileForm;
