import React from "react";
import styles from "./ingredient.module.css";
import { useSelector, useDispatch } from "react-redux";
import Modal from "../../components/modal/modal";
import IngredientDetails from "../../components/ingredient-details/ingredient-details";
import { closeIngredientModal } from "../../utils";
import { useNavigate } from "react-router-dom";

function IngredientPage() {
  const { modal } = useSelector((store) => store.modal);
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
