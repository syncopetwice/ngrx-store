import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromPhotos from './photos.reducer';

export interface AppState {
  photos: fromPhotos.PhotosState;
}

export const reducers: ActionReducerMap<AppState> = {
  photos: fromPhotos.reducer
};

export const getPhotosState = createSelector(createFeatureSelector<AppState>('photos'), (state) => state.photos);
export const getAllPhotos = createSelector(getPhotosState, fromPhotos.getAllPhotos);
