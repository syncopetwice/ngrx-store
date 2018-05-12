import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoComponent implements OnInit {

  @Input() photo;

  @Output() like = new EventEmitter();
  @Output() unlike = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onLike(id) {
    this.like.emit(id);
  }

  onUnlike() {
    this.unlike.emit();
  }

}
