import { AdminAuthguard } from './services/admin-authguard.service';
import { OrderService } from './services/order.service';
import { RouterModule, CanActivate } from '@angular/router';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AppErrorHandler } from './common/app-errorhandler';
import { ErrorHandler } from '@angular/core';
import { CourseService } from './course/course.service';
import { Summary } from './course/summary.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { HttpClientModule } from '@angular/common/http'; 
import { AngularBasics, CoursesComponent } from './courses.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { FavoriteComponent } from './favorite/favorite.component';

import { PanelComponent } from './panel/panel.component';
import { DirectiveComponent } from './directive/directive.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';

import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { SignupService } from './signup-form/signup.service';
import { PostComponent } from './post/post.component';
import { PostService } from './services/post.service';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubFollowerService } from './services/github-follower.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { fakeBackendProvider } from './helpers/fake-backend';
import { MockBackend } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
import { AuthService } from './services/auth.service';
import { Authguard } from './services/authguard.service';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AngularBasics,
    Summary,
    FavoriteComponent,
    PanelComponent,
    DirectiveComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    SignupFormComponent,
    PostComponent,
    HomeComponent,
    NavbarComponent,
    GithubFollowersComponent,
    GithubProfileComponent,
    NotFoundComponent, 
    LoginComponent,
    AdminComponent,
    HomeComponent,
    NotFoundComponent,
    NoAccessComponent     
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path:'',
        component:HomeComponent
      },
      {
        path:'followers/:username',
        component:GithubProfileComponent,
        canActivate:[Authguard]
      },
      {
        path:'followers',
        component:GithubFollowersComponent,
        canActivate:[Authguard]
      },
      {
        path:'post',
        component:PostComponent,
        canActivate:[Authguard]
      },
     
      { 
        path: 'admin', 
        component: AdminComponent,
        canActivate:[Authguard,AdminAuthguard]
       
      },
      { path: 'login', component: LoginComponent },
      { path: 'no-access', component: NoAccessComponent },   
      {
        path:'**',
        component:NotFoundComponent
      },  
     ])
 
  ],
  providers: [
    CoursesService,
    CourseService,
    SignupService,
    PostService,
    GithubFollowerService,
    fakeBackendProvider,
    AuthService,
    OrderService,
    AdminAuthguard,
    MockBackend,
    BaseRequestOptions,
    {provide:ErrorHandler, useClass:AppErrorHandler}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
