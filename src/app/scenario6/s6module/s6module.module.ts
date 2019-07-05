import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildaComponent } from './childa/childa.component';
import { ChildbComponent } from './childb/childb.component';
import { Parent3Component } from './parent3/parent3.component';

@NgModule({
  declarations: [ChildaComponent, ChildbComponent, Parent3Component],
  imports: [
    CommonModule
  ],
  bootstrap: [ChildaComponent, ChildbComponent, Parent3Component],
  exports: [ChildaComponent, ChildbComponent, Parent3Component]
  
})
export class S6moduleModule { }
