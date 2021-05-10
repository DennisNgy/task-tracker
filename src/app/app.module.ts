import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/shared/button/button.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { RecentActivityComponent } from './components/recent-activity/recent-activity.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { TaskHeaderComponent } from './components/task-header/task-header.component';
import { TimeAgoPipe } from './pipe/time-ago.pipe';
import { TaskErrorAlertComponent } from './components/task-error-alert/task-error-alert.component';
import { AboutComponent } from './components/pages/about/about.component';
import { LoadingSpinnerComponent } from './components/shared/loading-spinner/loading-spinner.component';
import { InterceptorService } from './services/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    NavbarComponent,
    TasksComponent,
    TaskItemComponent,
    RecentActivityComponent,
    AddTaskComponent,
    TaskHeaderComponent,
    TimeAgoPipe,
    TaskErrorAlertComponent,
    AboutComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
