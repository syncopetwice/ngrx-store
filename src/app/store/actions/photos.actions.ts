import { Action } from '@ngrx/store';
import { Photo } from '../models/photo.model';

export const LOAD_PHOTOS = '[Photos] Load Photos';
export const LOAD_PHOTOS_FAIL = '[Photos] Load Photos Fail';
export const LOAD_PHOTOS_SUCCESS = '[Photos] Load Photos Success';


export class LoadPhotos implements Action {
  readonly type = LOAD_PHOTOS;
}

export class LoadPhotosFail implements Action {
  readonly type = LOAD_PHOTOS_FAIL;
  constructor(public payload: Photo[]) {}
}

export class LoadPhotosSuccess implements Action {
  readonly type = LOAD_PHOTOS_SUCCESS;
  constructor(public payload: Photo[]) {}
}

export type PhotosAction =
  LoadPhotos |
  LoadPhotosFail |
  LoadPhotosSuccess
  ;
