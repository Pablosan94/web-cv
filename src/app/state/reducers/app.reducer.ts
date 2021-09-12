import {createReducer, on} from "@ngrx/store";
import {AppActions} from "../actions/app.actions";

export interface AppState {
  windowSize: number;
  isMobile: boolean;
  currentRoute: string;
}

export const initialState: AppState = {
  windowSize: -1,
  isMobile: false,
  currentRoute: ''
}

const _appReducer = createReducer(
  initialState,
  // @ts-ignore
  on(AppActions.setWindowSize, (state, { size }) => ({
    ...state,
    windowSize: size,
    isMobile: size < 768
  })),
  on(AppActions.navigateTo, (state, { route }) => ({
    ...state,
    currentRoute: route
  }))
);

// @ts-ignore
export function appReducer(state, action) {
  return _appReducer(state, action)
}
