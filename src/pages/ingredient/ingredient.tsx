import React, {FC} from "react";
import styles from "./ingredient.module.css";
import { useSelector, useDispatch } from "../../services/hooks";
import Modal from "../../components/modal/modal";
import IngredientDetails from "../../components/ingredient-details/ingredient-details";
import { closeIngredientModal, getModal } from "../../utils";
import { useNavigate } from "react-router-dom";

const IngredientPage: FC = () => {
  const { modal } = useSelector(getModal);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const closeModal = () => {
    closeIngredientModal(dispatch);
    navigate("/");
  };

  return modal ? (
    <Modal closeModal={closeModal}>
      <IngredientDetails />
    </Modal>
  ) : (
    <div className={`${styles.container} pt-30`}>
      <IngredientDetails />
    </div>
  );
}

export default IngredientPage;
