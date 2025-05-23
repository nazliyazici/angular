import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './components/layouts/layouts.component';
import path from 'path';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [

  {
    path:"",
    component: LayoutsComponent,
    children:[
      {
      path: "",
      component: HomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
