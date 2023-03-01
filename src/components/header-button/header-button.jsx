import React from "react";
import styles from "./header-button.module.css";
import PropTypes from "prop-types";
import {
  ListIcon,
  BurgerIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useLocation } from "react-router-dom";

function HeaderButton({ iconType, text, indents, to }) {
  const location = useLocation();

  const icons = {
    ListIcon: ListIcon,
    BurgerIcon: BurgerIcon,
    ProfileIcon: ProfileIcon,
  };

  const className =
    location.pathname.indexOf(to) === 0 && location.pathname[1] === to[1]
      ? indents + " " + styles.button + " " + styles.button_active
      : indents + " " + styles.button;

  const Icon = icons[iconType];
  return (
    <Link className={className} to={to}>
      {location.pathname === to ? (
        <Icon type="primary" />
      ) : (
        <Icon type="secondary" />
      )}
      <span className={`pl-2 text text_type_main-default`}>{text}</span>
    </Link>
  );
}

HeaderButton.propTypes = {
  iconType: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  indents: PropTypes.string,
  to: PropTypes.string.isRequired,
};

export default HeaderButton;
