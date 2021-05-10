import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { TasksComponent } from './components/tasks/tasks.component';

const routes: Routes = [
  {
    path:'',
    component: TasksComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '**',
    component: TasksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
