import {
  SCROLL_ON_BUN,
  SCROLL_ON_SAUCE,
  SCROLL_ON_MAIN,
} from "../services/actions/ingredients-scroll";

import {
  SET_INGREDIENT_MODAL,
  REMOVE_INGREDIENT_MODAL,
} from "../services/actions/ingredient-modal";

import { REMOVE_CONSTRUCTOR_ELEMENT } from "../services/actions/constructor";

export const handleScrollIniter = (target, dispatch) => {
  return (e) => {
    if (e.target.scrollTop < (target.sauceY + target.bunY) / 2) {
      dispatch({ type: SCROLL_ON_BUN });
    } else if (
      e.target.scrollTop >= (target.sauceY + target.bunY) / 2 &&
      e.target.scrollTop < (target.mainY + target.sauceY) / 2
    ) {
      dispatch({ type: SCROLL_ON_SAUCE });
    } else {
      dispatch({ type: SCROLL_ON_MAIN });
    }
  };
};

export function openIngredientModal(dispatch) {
  dispatch({ type: SET_INGREDIENT_MODAL });
}

export function closeIngredientModal(dispatch) {
  dispatch({ type: REMOVE_INGREDIENT_MODAL });
}

export function deleteHandler(dispatch, { index, price }) {
  dispatch({
    type: REMOVE_CONSTRUCTOR_ELEMENT,
    index,
    price,
  });
}

export const getStore = (store) => store;

export const getModal = (store) => store.modal;

export const getIngredients = (store) => store.ingredients;

export const getOrderNumber = (store) => store.orderData.number;

export const getUserFromStore = (store) => store.user;

export const getFormError = (store) => store.formError;

export const getOrdersData = (store) => store.orders;

export function getCookie(name) {
  const matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

export function setCookie(name, value, props) {
  props = props || {};
  let exp = props.expires;
  if (typeof exp == "number" && exp) {
    const d = new Date();
    d.setTime(d.getTime() + exp * 1000);
    exp = props.expires = d;
  }
  if (exp && exp.toUTCString) {
    props.expires = exp.toUTCString();
  }
  value = encodeURIComponent(value);
  let updatedCookie = name + "=" + value;
  for (const propName in props) {
    updatedCookie += "; " + propName;
    const propValue = props[propName];
    if (propValue !== true) {
      updatedCookie += "=" + propValue;
    }
  }
  document.cookie = updatedCookie;
}

export function deleteCookie(name) {
  setCookie(name, null, { expires: -1 });
}

export function initFormState(formSettings) {
  const keys = Object.keys(formSettings).filter((item) => {
    return item === "title" || item === "buttonSettings" ? false : true;
  });

  const inputsObj = {};

  keys.forEach((item) => {
    inputsObj[item] = "";
  });

  return inputsObj;
}

export const composeList = (list, columnClass) => {
  const length = list.length;
  if (list.length > 40) {
    return (
      <>
        <div className={columnClass}>{list.slice(0, 10)}</div>
        <div className={columnClass}>{list.slice(10, 20)}</div>
        <div className={columnClass}>{list.slice(20, 30)}</div>
        <div className={columnClass}>{list.slice(30, 40)}</div>
        <div className={columnClass}>{list.slice(40, length)}</div>
      </>
    );
  }
  if (list.length > 30) {
    return (
      <>
        <div className={columnClass}>{list.slice(0, 10)}</div>
        <div className={columnClass}>{list.slice(10, 20)}</div>
        <div className={columnClass}>{list.slice(20, 30)}</div>
        <div className={columnClass}>{list.slice(30, length)}</div>
      </>
    );
  }
  if (list.length > 20) {
    return (
      <>
        <div className={columnClass}>{list.slice(0, 10)}</div>
        <div className={columnClass}>{list.slice(10, 20)}</div>
        <div className={columnClass}>{list.slice(20, length)}</div>
      </>
    );
  }
  if (list.length > 10) {
    return (
      <>
        <div className={columnClass}>{list.slice(0, 10)}</div>
        <div className={columnClass}>{list.slice(10, length)}</div>
      </>
    );
  }
  return <div className={columnClass}>{list}</div>;
};
