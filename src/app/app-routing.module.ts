import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostViewComponent} from './post-view/post-view.component';
import {RouterModule, Routes} from '@angular/router';
import {PostSearchComponent} from './post-search/post-search.component';

const routes: Routes = [
  { path: 'post-view', component: PostViewComponent },
  { path: '', component: PostSearchComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
