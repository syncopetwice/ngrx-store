import { Store } from '@ngrx/store';
import { IPhoto } from './photo.interface';
import { Injectable } from '@angular/core';

@Injectable()
export class PhotosService {
  constructor(
    private store: Store<any>
  ) {}

  onLike(photo) {
    // this.store.dispatch({
    //   type: LIKE,
    //   payload: photo
    // });
  }

  // onUnlike(e) {
  //   this.store.dispatch({

  //   })
  // }

}
