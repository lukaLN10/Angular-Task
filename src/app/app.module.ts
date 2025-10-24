import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { RouterModule } from '@angular/router';
import { ToDoComponent } from './to-do/to-do.component';
import { WheelComponent } from './wheel/wheel.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { ErrorComponent } from './error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    HomeComponent,
    FooterComponent,
    UsersComponent,
    PostsComponent,
    AllPostsComponent,
    PromotionsComponent,
    ToDoComponent,
    WheelComponent,
    LeaderboardComponent,
    ErrorComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
