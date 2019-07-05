import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [TestComponent],
  imports: [
    CommonModule,
    BrowserModule
  ],
  bootstrap: [TestComponent],
  exports: [TestComponent]
})
export class S1moduleModule { }
