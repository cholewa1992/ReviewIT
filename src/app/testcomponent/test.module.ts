import { NgModule }      from '@angular/core';
import { MaterialModule } from '@angular/material'

import { TestComponent } from './test.component'
import { TestService } from './test.service'

import { SharedModule } from '../shared'
import { FieldDynModule } from '../field-dyn/field-dyn.module'

@NgModule({
  imports:      [ MaterialModule, SharedModule, FieldDynModule ],
  providers:    [ TestService ],
  declarations: [ TestComponent ],
  exports:      [ TestComponent ]
})
export class TestModule { }