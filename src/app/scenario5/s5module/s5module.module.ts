import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child2Component } from './child2/child2.component';
import { Parent2Component } from './parent2/parent2.component';
import { GrandparentComponent } from './grandparent/grandparent.component';

@NgModule({
  declarations: [Child2Component, Parent2Component, GrandparentComponent],
  imports: [
    CommonModule
  ],
  bootstrap:[Child2Component, Parent2Component, GrandparentComponent],
  exports: [Child2Component, Parent2Component, GrandparentComponent]
})
export class S5moduleModule { }
