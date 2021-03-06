import {createAction, props} from "@ngrx/store";

export const setWindowSize = createAction('[AppState] Set window size', props<{ size: number }>());
export const navigateTo = createAction('[AppState] Navigate', props<{ route: string }>());

export const AppActions = {
  setWindowSize,
  navigateTo
};
