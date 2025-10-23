import { Component } from '@angular/core';
import { HttpService } from '../Services/http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-to-do',
  standalone: false,
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css',
})
export class ToDoComponent {
  todos: any[] = [];
  userName: string = '';

  constructor(
    private dataService: HttpService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const userId = +params['userId'];

      forkJoin({
        todos: this.dataService.getTodos(),
        users: this.dataService.getUsers(),
      }).subscribe(({ todos, users }: any) => {
        const user = users.find((u: any) => u.id === userId);
        this.userName = user ? user.name : 'უცნობი მომხმარებელი';
        this.todos = todos.filter((t: any) => t.userId === userId);
      });
    });
  }
}
