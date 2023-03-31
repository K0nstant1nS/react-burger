import { TOrder } from "../types/data";

export const INIT_ORDERS_SOCKET = "INIT_ORDERS_SOCKET" as const;
export const INIT_USER_ORDERS_SOCKET = "INIT_USER_ORDERS_SOCKET" as const;
export const SUCCESS_ORDERS_SOCKET = "SUCCESS_ORDERS_SOCKET" as const;
export const SUCCESS_USER_ORDERS_SOCKET = "SUCCESS_USER_ORDERS_SOCKET" as const;
export const CLOSE_ORDERS_SOCKET = "CLOSE_ORDERS_SOCKET" as const;
export const CLOSE_USER_ORDERS_SOCKET = "CLOSE_USER_ORDERS_SOCKET" as const;
export const SET_ORDERS_DATA = "SET_ORDERS_DATA" as const;
export const SET_USER_ORDERS_DATA = "SET_USER_ORDERS_DATA" as const;
export const ON_SOCKET_CLOSE = "ON_SOCKET_CLOSE" as const;
export const ON_USER_SOCKET_CLOSE = "ON_USER_SOCKET_CLOSE" as const;

export interface IInitOrdersSocketAction {
    readonly type: typeof INIT_ORDERS_SOCKET;
}

export interface IInitUserOrdersSocketAction {
    readonly type: typeof INIT_USER_ORDERS_SOCKET;
}

export interface ISuccessOrdersSocketAction {
    readonly type: typeof SUCCESS_ORDERS_SOCKET;
}

export interface ISuccessUserOrdersSocketAction {
    readonly type: typeof SUCCESS_USER_ORDERS_SOCKET;
}

export interface ICloseOrdersSocketAction {
    readonly type: typeof CLOSE_ORDERS_SOCKET;
}

export interface ICloseUserOrdersSocketAction {
    readonly type: typeof CLOSE_USER_ORDERS_SOCKET;
}

export interface ISetOrdersDataAction {
    readonly type: typeof SET_ORDERS_DATA;
    readonly payload: {
        orders: Array<TOrder>;
        total: number|string;
        totalToday: number|string;
    }
}

export interface ISetUserOrdersDataAction {
    readonly type: typeof SET_USER_ORDERS_DATA;
    readonly payload: {
        orders: Array<TOrder>;
    };
}

export interface IOnCloseSocketAction {
    readonly type: typeof ON_SOCKET_CLOSE;
}

export interface IOnUserCloseSocketAction {
    readonly type: typeof ON_USER_SOCKET_CLOSE;
}

export type TOrdersActions = IOnUserCloseSocketAction|IOnCloseSocketAction|ISetUserOrdersDataAction|ISetOrdersDataAction|ICloseUserOrdersSocketAction|ICloseOrdersSocketAction|ISuccessUserOrdersSocketAction|ISuccessOrdersSocketAction|IInitOrdersSocketAction|IInitUserOrdersSocketAction
