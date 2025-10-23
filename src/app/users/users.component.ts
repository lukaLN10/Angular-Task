import { Component } from '@angular/core';
import { HttpService } from '../Services/http.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  users: any[] = [];
  filtered: any[] = [];
  searchText: string = '';

  constructor(private dataService: HttpService, private router: Router) {}

  ngOnInit(): void {
    this.dataService.getUsers().subscribe({
      next: (data: any) => {
        this.users = data;
        this.filtered = data;
      },
      error: (err) => console.error(err),
    });
  }

  onSearch(): void {
    const search = this.searchText.toLowerCase().trim();
    if (!search) {
      this.filtered = this.users;
      return;
    }
    this.filtered = this.users.filter((user) => {
      const [firstName, lastName] = user.name.toLowerCase().split(' ');
      return (
        firstName.includes(search) ||
        (lastName && lastName.includes(search)) ||
        user.email.toLowerCase().includes(search)
      );
    });
  }

  clearSearch(): void {
    this.searchText = '';
    this.filtered = this.users;
  }

  goToPosts(userId: number): void {
    this.router.navigate(['/posts'], { queryParams: { userId } });
  }
  goToTodo(userId: number): void {
    this.router.navigate(['/todo'], { queryParams: { userId } });
  }
}
