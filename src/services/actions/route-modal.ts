export const SET_ROUTE_MODAL = "SET_ROUTE_MODAL" as const;
export const REMOVE_ROUTE_MODAL = "REMOVE_ROUTE_MODAL" as const;

export interface ISetRouteModalAction {
    readonly type: typeof SET_ROUTE_MODAL;
}

export interface IRemoveRouteModalAction {
    readonly type: typeof REMOVE_ROUTE_MODAL;
}

export type TRouteModalActions = ISetRouteModalAction|IRemoveRouteModalAction;
