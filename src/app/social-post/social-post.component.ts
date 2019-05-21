import { Component } from "@angular/core";
import { Post } from "../post";

@Component({
  selector: "social-post",
  templateUrl: "./social-post.component.html",
  styleUrls: ["./social-post.component.css"]
})
export class SocialPostComponent {
  posts: Post[] = [
    {
      title: "Muppet",
      content: 'Muppets are known for going "Mahna Mahna"',
      upvote: 0,
      downvote: 0
    },
    {
      title: "Fozzy",
      content: 'Although, Fozzy goes, "Wakka wakka"',
      upvote: 0,
      downvote: 0
    },
    {
      title: "Dog",
      content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit suscipit at veritatis. Repellat fugiat nihil fugit. Nulla, accusantium corporis porro corrupti facere similique atque eum dolorem hic animi dolore explicabo.",
      upvote: 0,
      downvote: 0
    },
    {
      title: "Cats",
      content: "Go Meow or something along those lines. Or so I've been told.",
      upvote: 0,
      downvote: 0
    }
  ];

  addClicked: boolean = false;
  
  constructor() {}

  onAddPost(post: Post): void {
    this.posts.unshift(post); 
    this.addClicked = false; 
  }

  removePost(index: number): void {
    this.posts.splice(index, 1); 
  }
  toggleForm(): void {
    this.addClicked = !this.addClicked;
  }


}
