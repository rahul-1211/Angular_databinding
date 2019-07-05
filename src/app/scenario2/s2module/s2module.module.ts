import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test1Component } from './test1/test1.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [Test1Component],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  bootstrap: [Test1Component],
  exports: [Test1Component]
})
export class S2moduleModule { }
