import { TIngredient } from "../types/data";
import { v4 as uuid} from "uuid"

export const ADD_CONSTRUCTOR_ELEMENT = "ADD_CONSTRUCTOR_ELEMENT" as const;
export const REMOVE_CONSTRUCTOR_ELEMENT = "REMOVE_CONSTRUCTOR_ELEMENT" as const;
export const SWAP_IN_CONSTRUCTOR = "SWAP_IN_CONSTRUCTOR" as const;
export const CLEAR_CONSTRUCTOR = "CLEAR_CONSTRUCTOR" as const;


export interface IAddConstructorElementAction{
    readonly type: typeof ADD_CONSTRUCTOR_ELEMENT;
    readonly payload :{
        readonly ingredient: TIngredient;
        readonly keyId: string;
    }
}

export interface IRemoveConstructorElementAction{
    readonly type: typeof REMOVE_CONSTRUCTOR_ELEMENT;
    readonly payload: {
        readonly price: number;
        readonly index: number;
    }
}

export interface ISwapInConstructorAction{
    readonly type: typeof SWAP_IN_CONSTRUCTOR;
    readonly payload: {
        readonly dragIndex: number;
        readonly dropIndex: number;
    }
}

export interface IClearConstructorAction{
    readonly type: typeof CLEAR_CONSTRUCTOR;
}

export type TConstructorActions = IClearConstructorAction|ISwapInConstructorAction|IRemoveConstructorElementAction|IAddConstructorElementAction

export const addConstructorElementAction = (ingredient: TIngredient):IAddConstructorElementAction => {
    const keyId = uuid()
    return {type: ADD_CONSTRUCTOR_ELEMENT, payload: {ingredient, keyId}}
}

export const removeConstructorElementAction = (price: number, index: number):IRemoveConstructorElementAction => {
    return {type: REMOVE_CONSTRUCTOR_ELEMENT, payload: {price,index}}
}

export const swapInConstructorAction = (dragIndex: number, dropIndex: number):ISwapInConstructorAction => {
    return {type: SWAP_IN_CONSTRUCTOR, payload: {dragIndex,dropIndex}}
}

export const clearConstructorAction = ():IClearConstructorAction => {
    return {type:CLEAR_CONSTRUCTOR}
}

