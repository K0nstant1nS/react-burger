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
    readonly payload: {
        readonly containerType: string;
        readonly y: number;
    }
}

export interface IScrollToAction{
    readonly type: typeof SCROLL_TO;
    readonly payload: {
        readonly scrollTo: number;
    }
}

export interface IScrollRefreshAction{
    readonly type: typeof SCROLL_REFRESH;
}

export type TIngredientsScrollActions = IScrollRefreshAction|IScrollOnBunAction|IScrollOnSauceAction|IScrollOnMainAction|ISetStartsAction|IScrollToAction;


export const scrollOnBunAction = ():IScrollOnBunAction => {
    return {type: SCROLL_ON_BUN}
}

export const scrollOnSauceAction = ():IScrollOnSauceAction => {
    return {type: SCROLL_ON_SAUCE}
}

export const scrollOnMainAction = ():IScrollOnMainAction => {
    return {type: SCROLL_ON_MAIN}
}

export const setStartsAction = (containerType: string, y:number):ISetStartsAction => {
    return {type: SET_STARTS, payload: {containerType, y}}
}

export const scrollToAction = (scrollTo:number):IScrollToAction => {
    return {type: SCROLL_TO, payload: {scrollTo}}
}

export const scrollRefreshAction = ():IScrollRefreshAction => {
    return {type: SCROLL_REFRESH}
}
