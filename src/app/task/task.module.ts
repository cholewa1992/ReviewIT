import { NgModule }      from '@angular/core';

import { routing } from './task.routes';
import { SharedModule } from '../shared';
import { MaterialModule } from '@angular/material';

import { TaskDetailsComponent, TasklistComponent } from './';
import { APIService } from '../services';
import { FieldDynModule } from '../field-dyn/field-dyn.module';
import { TaskDashboardService } from './task-dashboard.service'
import { TaskDashboard } from './task-dashboard.component'
import { StagelistComponent } from './stagelist/stagelist.component'
import { StagelistService } from './stagelist/stagelist.service'
import { TaskListService } from './task-list/task-list.service'

@NgModule({
  imports:      [ routing, SharedModule, FieldDynModule, MaterialModule ],
  providers:    [ APIService, TaskDashboardService, StagelistService, TaskListService ],
  declarations: [ TaskDetailsComponent, TasklistComponent, TaskDashboard, StagelistComponent ],
})
export class TaskModule { }