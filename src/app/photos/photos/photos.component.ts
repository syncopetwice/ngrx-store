import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import { Photo } from '../../store/models/photo.model';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})

export class PhotosComponent implements OnInit {

  public photos$: Observable<Photo[]>;

  constructor(
    private store: Store<fromStore.AppState>
  ) {}

  ngOnInit() {
    this.photos$ = this.store.select<any>(fromStore.getAllPhotos);
  }
}
