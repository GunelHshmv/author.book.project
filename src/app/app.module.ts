import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AuthorComponent } from './author/author.component';
import { AddauthorComponent } from './author/addauthor/addauthor.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const route:Routes=[
{path:'adddata',component:AddauthorComponent},
{path:'tabledata',component:AuthorComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
    AddauthorComponent,
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// RouterModule.forRoot(route)