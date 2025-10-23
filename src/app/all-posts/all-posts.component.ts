import { Component } from '@angular/core';
import { HttpService } from '../Services/http.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-all-posts',
  standalone: false,
  templateUrl: './all-posts.component.html',
  styleUrl: './all-posts.component.css'
})
export class AllPostsComponent {
  posts: any[] = [];
  selectedPost: any = null; 

  constructor(private dataService: HttpService) {}

  ngOnInit(): void {
    forkJoin({
      posts: this.dataService.getPosts(),
      users: this.dataService.getUsers()
    }).subscribe(({ posts, users }: any) => {
      this.posts = posts.map((post: any) => {
        const user = users.find((u: any) => u.id === post.userId);
        return { ...post, userName: user ? user.name : 'უცნობი მომხმარებელი' };
      });
    });
  }

  viewPost(post: any) {
    this.selectedPost = post; 
  }

  closeModal() {
    this.selectedPost = null; 
  }
}
