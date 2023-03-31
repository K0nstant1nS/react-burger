import { TIngredient } from "../types/data";

export const GET_CONSTRUCTOR_DATA_SUCCESS = "GET_CONSTRUCTOR_DATA_SUCCESS" as const;
export const GET_CONSTRUCTOR_DATA_ERROR = "GET_CONSTRUCTOR_DATA_ERROR" as const;
export const GET_CONSTRUCTOR_DATA_REQUEST = "GET_CONSTRUCTOR_DATA_REQUEST" as const;
export const ADD_CONSTRUCTOR_ELEMENT = "ADD_CONSTRUCTOR_ELEMENT" as const;
export const REMOVE_CONSTRUCTOR_ELEMENT = "REMOVE_CONSTRUCTOR_ELEMENT" as const;
export const SWAP_IN_CONSTRUCTOR = "SWAP_IN_CONSTRUCTOR" as const;
export const CLEAR_CONSTRUCTOR = "CLEAR_CONSTRUCTOR" as const;

export interface IGetConstructorDataSuccessAction{
    readonly type: typeof GET_CONSTRUCTOR_DATA_SUCCESS;
    readonly bun: TIngredient;
}

export interface IGetConstructorDataErrorAction{
    readonly type: typeof GET_CONSTRUCTOR_DATA_ERROR;
}

export interface IGetConstructorDataRequestAction{
    readonly type: typeof GET_CONSTRUCTOR_DATA_REQUEST;
}

export interface IAddConstructorElementAction{
    readonly type: typeof ADD_CONSTRUCTOR_ELEMENT;
    readonly ingredient: TIngredient;
}

export interface IRemoveConstructorElementAction{
    readonly type: typeof REMOVE_CONSTRUCTOR_ELEMENT;
    readonly price: number;
    readonly index: number;
}

export interface ISwapInConstructorAction{
    readonly type: typeof SWAP_IN_CONSTRUCTOR;
    readonly dragIndex: number;
    readonly dropIndex: number;
}

export interface IClearConstructorAction{
    readonly type: typeof CLEAR_CONSTRUCTOR;
}

export type TConstructorActions = IClearConstructorAction|ISwapInConstructorAction|IRemoveConstructorElementAction|IAddConstructorElementAction|IGetConstructorDataSuccessAction|IGetConstructorDataErrorAction|IGetConstructorDataRequestAction
