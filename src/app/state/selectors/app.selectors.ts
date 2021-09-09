import {createFeatureSelector, createSelector, MemoizedSelector} from "@ngrx/store";
import {AppState} from "../reducers/app.reducer";

export const getAppState: MemoizedSelector<any, AppState> = createFeatureSelector<AppState>('app');

export const getWindowSize: MemoizedSelector<any, number> = createSelector(getAppState, ({ windowSize }) => windowSize);
export const getIsMobile: MemoizedSelector<any, boolean> = createSelector(getAppState, ({ isMobile }) => isMobile);
