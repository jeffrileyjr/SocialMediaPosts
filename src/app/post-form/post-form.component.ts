import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  @Output() added = new EventEmitter<any>();

  constructor() { }

  addPost(form) {
    this.added.emit({
      title: form.value.title,
      content: form.value.content,
      upvote: 0,
      downvote: 0
    });
    form.resetForm();
  }

  ngOnInit() {
  }

}
