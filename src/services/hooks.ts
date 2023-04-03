import { TypedUseSelectorHook, useSelector as selectorHook, useDispatch as dispatchHook  } from "react-redux";
import { RootState, TApplicationActions } from "./types";
import {ThunkDispatch} from 'redux-thunk'


export type TThunkDispatch = ThunkDispatch<RootState, any, TApplicationActions>;
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
export const useDispatch = ()=> dispatchHook<TThunkDispatch>()
