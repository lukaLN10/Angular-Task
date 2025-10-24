import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { ToDoComponent } from './to-do/to-do.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"users",component:UsersComponent},
  {path:"posts",component:PostsComponent}, 
  {path:"allposts",component:AllPostsComponent},
  {path:"promotions",component:PromotionsComponent},
  {path:"todo",component:ToDoComponent},

  {path:"**", component:ErrorComponent}



  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
