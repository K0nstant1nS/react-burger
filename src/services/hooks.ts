import { TypedUseSelectorHook, useSelector as selectorHook, useDispatch as dispatchHook  } from "react-redux";
import { AppDispatch, AppThunk, RootState, TApplicationActions } from "./types";
import {ThunkDispatch} from 'redux-thunk'
import {AnyAction, Action} from "redux"



export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
//export const useDispatch = () => dispatchHook<AppDispatch|AppThunk>()
//export const useDispatch = ()=>dispatchHook<AppDispatch>()
export const useDispatch = ()=> dispatchHook<ThunkDispatch<RootState, any, TApplicationActions>>()
