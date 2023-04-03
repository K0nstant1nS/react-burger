import {
  SCROLL_ON_BUN,
  SCROLL_ON_SAUCE,
  SCROLL_ON_MAIN,
} from "../services/actions/ingredients-scroll";

import {
  SET_ROUTE_MODAL,
  REMOVE_ROUTE_MODAL,
} from "../services/actions/route-modal";

import { REMOVE_CONSTRUCTOR_ELEMENT } from "../services/actions/constructor";
import { RootState } from "../services/types";
import { TOrderModalState } from "../services/reducers/order-modal";
import { TThunkDispatch } from "../services/hooks";
import { TFormProps } from "../services/types/data";
import { TIngredientsScrollState } from "../services/reducers/ingredients-scroll";
import { TRouteModalState } from "../services/reducers/route-modal";
import { TIngredientsState } from "../services/reducers/ingredients";
import { TUserState } from "../services/reducers/user";
import { TFormErrorsState } from "../services/reducers/form-errors";
import { TOrdersState } from "../services/reducers/orders";

export const handleScrollIniter = (target: TIngredientsScrollState, dispatch:TThunkDispatch)  => {
  return (e:Event):void => {
    if(!e.currentTarget){
      throw new Error("No scroll target")
    }
    if (e.currentTarget.scrollTop < (target.sauceY + target.bunY) / 2) {
      dispatch({ type: SCROLL_ON_BUN });
    } else if (
      e.currentTarget.scrollTop >= (target.sauceY + target.bunY) / 2 &&
      e.currentTarget.scrollTop < (target.mainY + target.sauceY) / 2
    ) {
      dispatch({ type: SCROLL_ON_SAUCE });
    } else {
      dispatch({ type: SCROLL_ON_MAIN });
    }
  };
};

export function openIngredientModal(dispatch:TThunkDispatch):void {
  dispatch({ type: SET_ROUTE_MODAL });
}

export function closeIngredientModal(dispatch:TThunkDispatch):void {
  dispatch({ type: REMOVE_ROUTE_MODAL });
}

export function deleteHandler(dispatch:TThunkDispatch, { index, price }: {index: number; price: number}):void {
  dispatch({
    type: REMOVE_CONSTRUCTOR_ELEMENT,
    index,
    price,
  });
}

export const getStore = (store:RootState) => store;

export const getModal = (store:RootState):TRouteModalState => store.modal;

export const getIngredients = (store:RootState):TIngredientsState => store.ingredients;

export const getOrderData = (store:RootState):TOrderModalState => store.orderData;

export const getUserFromStore = (store:RootState):TUserState => store.user;

export const getFormError = (store:RootState):TFormErrorsState => store.formError;

export const getOrdersData = (store:RootState):TOrdersState => store.orders;

export const getCookie = (name:string):string | undefined => {
  const matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

export function setCookie(
  name: string,
  value: string,
  props: { [key: string]: any } & { expires?: number | Date | string } = {}
):void {
  props = props || {};
  let exp = props.expires;
  if (typeof exp == 'number' && exp) {
    const d = new Date();
    d.setTime(d.getTime() + exp * 1000);
    exp = props.expires = d;
  }
  if (exp && (exp as Date).toUTCString) {
    props.expires = (exp as Date).toUTCString();
  }
  value = encodeURIComponent(value);
  let updatedCookie = name + '=' + value;
  for (const propName in props) {
    updatedCookie += '; ' + propName;
    const propValue = props[propName];
    if (propValue !== true) {
      updatedCookie += '=' + propValue;
    }
  }
  document.cookie = updatedCookie;
}

export const deleteCookie = (name:string):void => {
  setCookie(name, "", { expires: -1 });
}

export function initFormState(formSettings:TFormProps["formSettings"]): {[T in "name"|"password"|"email"|"token"]?: string} {
  const keys = Object.keys(formSettings)

  const inputsObj: {[T in "name"|"password"|"email"|"token"]?: string} = {};


  keys.forEach((item) => {
    if(item === "name" || item === "password" || item === "email" || item === "token"){
      inputsObj[item] = "";
    }
  });

  return inputsObj;
}



export const composeList:(list: Array<JSX.Element>, columnClass:string)=> JSX.Element = (list, columnClass) => {
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
