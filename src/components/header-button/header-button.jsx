import React from "react";
import styles from "./header-button.module.css";
import PropTypes from "prop-types";
import {
  ListIcon,
  BurgerIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

function HeaderButton({ iconType, text, indents, isActive, onClick }) {
  const icons = {
    ListIcon: ListIcon,
    BurgerIcon: BurgerIcon,
    ProfileIcon: ProfileIcon,
  };

  const className = isActive
    ? indents + " " + styles.button + " " + styles.button_active
    : indents + " " + styles.button;

  const Icon = icons[iconType];
  return (
    <a href="#" className={className} onClick={onClick}>
      {isActive ? <Icon type="primary" /> : <Icon type="secondary" />}
      <span className={`pl-2 text text_type_main-default`}>{text}</span>
    </a>
  );
}

HeaderButton.propTypes = {
  iconType: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  indents: PropTypes.string,
  isActive: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default HeaderButton;
