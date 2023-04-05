import { TIngredient } from "../types/data";

export const ADD_CONSTRUCTOR_ELEMENT = "ADD_CONSTRUCTOR_ELEMENT" as const;
export const REMOVE_CONSTRUCTOR_ELEMENT = "REMOVE_CONSTRUCTOR_ELEMENT" as const;
export const SWAP_IN_CONSTRUCTOR = "SWAP_IN_CONSTRUCTOR" as const;
export const CLEAR_CONSTRUCTOR = "CLEAR_CONSTRUCTOR" as const;


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

export type TConstructorActions = IClearConstructorAction|ISwapInConstructorAction|IRemoveConstructorElementAction|IAddConstructorElementAction

export const addConstructorElementAction = (ingredient: TIngredient):IAddConstructorElementAction => {
    return {type: ADD_CONSTRUCTOR_ELEMENT, ingredient}
}

