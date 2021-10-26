import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getComments().subscribe((comments: any[]) => {
      console.log(comments);
      this.comments = comments;
    });
  }

  escuchaClick(id: number) {
    console.log(id);
  }
}
