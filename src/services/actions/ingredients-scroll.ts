export const SCROLL_ON_BUN = "SCROLL_ON_BUN" as const;
export const SCROLL_ON_SAUCE = "SCROLL_ON_SAUCE" as const;
export const SCROLL_ON_MAIN = "SCROLL_ON_MAIN" as const;
export const SET_STARTS = "SET_STARTS" as const;
export const SCROLL_TO = "SCROLL_TO" as const;
export const SCROLL_REFRESH = "SCROLL_REFRESH" as const

export interface IScrollOnBunAction{
    readonly type: typeof SCROLL_ON_BUN;
}

export interface IScrollOnSauceAction{
    readonly type: typeof SCROLL_ON_SAUCE;
}

export interface IScrollOnMainAction{
    readonly type: typeof SCROLL_ON_MAIN;
}

export interface ISetStartsAction{
    readonly type: typeof SET_STARTS;
    readonly containerType: string;
    readonly y: number;
}

export interface IScrollToAction{
    readonly type: typeof SCROLL_TO;
    readonly scrollTo: number;
}

export interface IScrollRefreshAction{
    readonly type: typeof SCROLL_REFRESH;
}

export type TIngredientsScrollActions = IScrollRefreshAction|IScrollOnBunAction|IScrollOnSauceAction|IScrollOnMainAction|ISetStartsAction|IScrollToAction;

