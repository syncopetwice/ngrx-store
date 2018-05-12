import { StoreModule } from '@ngrx/store';
import { PhotosService } from './photos.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotosRoutingModule } from './photos-routing.module';
import { PhotosComponent } from './photos/photos.component';
import { PhotoComponent } from './photo/photo.component';
import { reducers } from '../store';

@NgModule({
  imports: [
    CommonModule,
    PhotosRoutingModule,
    StoreModule.forFeature('photos', reducers)
  ],
  declarations: [PhotosComponent, PhotoComponent],
  providers: [PhotosService]
})
export class PhotosModule { }
