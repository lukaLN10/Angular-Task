import { Component } from '@angular/core';
import { HttpService } from '../Services/http.service';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-posts',
  standalone: false,
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent {
  posts: any[] = [];
  userName: string = '';
  selectedPost: any = null;

  constructor(
    private dataService: HttpService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const userId = +params['userId'];

      forkJoin({
        posts: this.dataService.getPosts(),
        users: this.dataService.getUsers(),
      }).subscribe(({ posts, users }: any) => {
        const user = users.find((u: any) => u.id === userId);
        this.userName = user ? user.name : 'უცნობი მომხმარებელი';
        this.posts = posts.filter((p: any) => p.userId === userId);
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
