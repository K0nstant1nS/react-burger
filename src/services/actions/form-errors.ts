export const SET_ERROR = "SET_ERROR" as const;
export const REMOVE_ERROR = "REMOVE_ERROR" as const;

export interface ISetErrorAction{
    readonly type: typeof SET_ERROR;
    readonly payload: {
        readonly message: string;
    }
}

export interface IRemoveErrorAction{
    readonly type: typeof REMOVE_ERROR;
}

export type TFormErrorsActions = ISetErrorAction|IRemoveErrorAction;

export const setErrorAction = (message:string):ISetErrorAction => {
    return {type: SET_ERROR, payload: {message}}
}

export const removeErrorAction = ():IRemoveErrorAction => {
    return {type: REMOVE_ERROR}
}
