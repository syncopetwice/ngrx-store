import { PhotosState } from './photos.reducer';
import { Photo } from '../models/photo.model';
import { Action } from '@ngrx/store';

import * as fromPhotos from '../actions/photos.actions';

export interface PhotosState {
  data: Photo[];
  loaded: boolean;
  loading: boolean;
}

export const initialState = {
  data: [
    {
      id: '11abbc4e1518b7db3ace8f247ac13f71',
      url:
        'https://scontent-arn2-1.cdninstagram.com/vp/11abbc4e1518b7db3ace8f247ac13f71/5B8FC3C4/t51.2885-15/sh0.08/e35/p640x640/28766580_435779406869045_8229421818927120384_n.jpg',
      title: 'Iceland',
      likes: 0
    },
    {
      id: '1121121abbc4e1518b7db3ace8f247ac13f71',
      url:
        'https://scontent-arn2-1.cdninstagram.com/vp/9f47aaaa9601defef5d9a86851d73b52/5B81A562/t51.2885-15/s640x640/sh0.08/e35/23594209_1570690879657239_2841826194423283712_n.jpg',
      title: 'Germany',
      likes: 1
    }
  ],
  loaded: false,
  loading: false
};

export function reducer (
  state = initialState,
  action: fromPhotos.PhotosAction
): PhotosState {

  switch (action.type) {
    case fromPhotos.LOAD_PHOTOS: {
      return {
        ...state,
        loading: true
      };
    }
    case fromPhotos.LOAD_PHOTOS_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true
      };
    }
    case fromPhotos.LOAD_PHOTOS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: true
      };
    }
  }

  return state;
}

export const getPhotosLoading = (state: PhotosState) => state.loading;
export const getPhotosLoaded = (state: PhotosState) => state.loaded;
export const getAllPhotos = (state: PhotosState) => state.data;
