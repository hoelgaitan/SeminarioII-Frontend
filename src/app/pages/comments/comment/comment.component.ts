import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() comment;
  @Output() clickComment = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onClick() {
    this.clickComment.emit(this.comment.id);
  }

}
