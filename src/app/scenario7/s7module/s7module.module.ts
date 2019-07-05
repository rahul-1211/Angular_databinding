import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstService } from './first.service';
import { Child7aComponent } from './child7a/child7a.component';
import { Child7bComponent } from './child7b/child7b.component';
import { Parent7Component } from './parent7/parent7.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [Child7aComponent, Child7bComponent, Parent7Component],
  imports: [
    CommonModule,
    FormsModule
  ],
  bootstrap:[Child7aComponent,Child7bComponent, Parent7Component],
  exports:[Child7aComponent,Child7bComponent, Parent7Component],
  providers:[FirstService]
})
export class S7moduleModule { }
